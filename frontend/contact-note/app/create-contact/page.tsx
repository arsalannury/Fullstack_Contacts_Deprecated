"use client";

import TextField from "@/components/Form/TextField";
import Select from "@/components/Form/Select";
import React, { useState } from "react";
import Upload from "@/components/Form/Upload";
import getBase64 from "@/helper";

interface Contacts {
  saveDevice: string;
  name: string;
  number: string;
  background: any;
}

const CreateContact = () => {
  const [contacts, setContacts] = useState<Contacts>({
    saveDevice: "",
    name: "",
    number: "",
    background: "",
  });

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
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

  return (
    <>
      <form>
        <TextField
          placeholder="Full name"
          id="name"
          name="name"
          type={"text"}
          onChange={(event) => handleChangeInput(event)}
          value={contacts.name}
        />
        <TextField
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
        >
          <option value="phone" id="phone">
            phone
          </option>
          <option value="pc" id="pc">
            pc
          </option>
          <option value="email" id="email">
            email
          </option>
        </Select>
      </form>
      <Upload onChange={handleChangeContactPhoto} />
      <div className="flex items-center justify-end w-12/12">
        <button
          className="outline-none border
                           border-dashed border-slate-700
                           p-3 bg-white transition-all
                         hover:text-white hover:bg-lime-900
                          hover:border-lime-900"
        >
          create
        </button>
      </div>
    </>
  );
};

export default CreateContact;
