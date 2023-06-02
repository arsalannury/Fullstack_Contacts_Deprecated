"use client";

import TextField from "@/components/Form/TextField";
import React, { useState } from "react";

interface Contacts {
  saveDevice: string;
  name: string;
  number: string;
  background: string;
}

const CreateContact = () => {
  const [contacts, setContacts] = useState<Contacts>({
    saveDevice: "",
    name: "",
    number: "",
    background: "",
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: targetName } = event.target;
    const newContacts = { ...contacts };
    newContacts[targetName as keyof Contacts] = event.target.value;
    setContacts(newContacts);
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
      </form>
    </>
  );
};

export default CreateContact;
