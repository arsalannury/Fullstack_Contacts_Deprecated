"use client";

import TextField from "@/components/Form/TextField";
import Select from "@/components/Form/Select";
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
          <option selected value="pc" id="pc">
            pc
          </option>
          <option value="email" id="email">
            email
          </option>
        </Select>
      </form>
    </>
  );
};

export default CreateContact;
