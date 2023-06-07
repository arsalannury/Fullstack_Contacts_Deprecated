"use client";

import TextField from "@/components/Form/TextField";
import Select from "@/components/Form/Select";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Upload from "@/components/Form/Upload";
import getBase64 from "@/helper";
import { useForm, SubmitHandler } from "react-hook-form";
import { BaseURL } from "@/BaseURL";

interface Contacts {
  saveDevice: string;
  name: string;
  number: string;
  background: any;
}

// const onSubmit: SubmitHandler<Contacts> = (data) => console.log(data);

const CreateContact = (props: any) => {
  const [contacts, setContacts] = useState<Contacts>({
    saveDevice: "",
    name: "",
    number: "",
    background: "",
  });
  const [progress, inProgress] = useState<boolean>(false);
  const [request, inRequest] = useState<string>("default");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Contacts>();

  const router = useRouter();
  const contactId = props.searchParams.contactId
    ? props.searchParams.contactId
    : null;

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name: targetName } = event.target;
    const newContacts = { ...contacts };
    newContacts[targetName as keyof Contacts] = event.target.value;
    setContacts(newContacts);
  };

  const handleChangeContactPhoto = async (file: any) => {
    const toBase64 = await getBase64(file);
    setContacts({ ...contacts, background: toBase64 });
  };

  const handleCreateContact = async () => {
    inProgress(true);
    await BaseURL.post("/contacts", contacts);
    try {
      inProgress(false);
      inRequest("success");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      inProgress(false);
      inRequest("failed");
    }
  };

  const handleUpdateContact = async () => {
     inProgress(true);
     await BaseURL.patch(`/contacts/${contactId}`, contacts);
     try {
       inProgress(false);
       inRequest("success");
       setTimeout(() => {
         router.push("/");
       }, 2000);
     } catch (error) {
       inProgress(false);
       inRequest("failed");
     }
  }


  useEffect(() => {
    const clientSideFetchContact = async () => {
      const result = await BaseURL.get(`/contacts/${contactId}`);
      try {
        const finalData = result.data.data;
        setContacts({
          name: finalData.name,
          background: finalData.background,
          number: finalData.number,
          saveDevice: finalData.saveDevice,
        });
      } catch (error) {
        throw new Error("something wrong");
      }
    };
    if (contactId) {
      clientSideFetchContact();
    }
  }, []);

  return (
    <>
      <form onSubmit={contactId ? handleSubmit(handleUpdateContact) : handleSubmit(handleCreateContact)}>
        <TextField
          reacthookformerror={errors}
          registerhookform={register}
          placeholder="Full name"
          id="name"
          name="name"
          type={"text"}
          onChange={(event) => handleChangeInput(event)}
          value={contacts.name}
        />
        <TextField
          registerhookform={register}
          reacthookformerror={errors}
          placeholder="Number"
          id="number"
          name="number"
          type={"text"}
          onChange={(event) => handleChangeInput(event)}
          value={contacts.number}
        />
        <Select
          placeholder="Save device"
          id="saveDevice"
          name="saveDevice"
          onChange={(event) => handleChangeInput(event)}
          value={contacts.saveDevice}
        />
        <Upload onChange={handleChangeContactPhoto} />
        <div className="flex items-center justify-end w-12/12">
          <button
            type="submit"
            className="outline-none border
                           border-dashed border-slate-700
                           p-3 bg-white transition-all
                         hover:text-white hover:bg-lime-900
                          hover:border-lime-900"
          >
            {progress ? "..." : contactId ? "update" : "create"}
          </button>
        </div>
      </form>
      <span
        className={request === "success" ? "text-lime-800" : "text-red-900"}>
        {request === "default"
          ? ""
          : "success"
          ? "contact saved successfuly"
          : "failed"
          ? "something wrong to save contact !"
          : ""}
      </span>
    </>
  );
};

export default CreateContact;
