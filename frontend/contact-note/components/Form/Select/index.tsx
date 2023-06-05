"use client";

import React from "react";

interface IProps {
  name: string;
  id: undefined | string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <div className="m-14">
      <select
        title="select"
        {...props}
        className="focus:shadow-md
               appearance-none
               p-2 lg:w-1/3 md:w-2/3 w-full
               outline-none
               block
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"
      >
        <option>phone</option>
        <option>pc</option>
        <option>email</option>
      </select>
    </div>
  );
};

export default Form;
