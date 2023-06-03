"use client";

import React from "react";

interface IProps {
  name: string;
  id: undefined | string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<any>;
  children: React.ReactNode;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <>
      <select
        title="select"
        {...props}
        className="focus:shadow-md
               appearance-none
               p-2 m-5 lg:w-1/3 md:w-2/3 w-full
               outline-none
               block
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"
      >
        {props.children}
      </select>
    </>
  );
};

export default Form;
