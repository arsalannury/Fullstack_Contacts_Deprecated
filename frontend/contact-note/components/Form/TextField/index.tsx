"use client";

import React from "react";

interface IProps {
  name: string;
  id: undefined | string;
  value: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <>
      <input
        {...props}
        className="focus:shadow-md
               p-2 m-2 lg:w-1/3 md:w-2/3 w-full
               outline-none
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"/>
    </>
  );
};

export default Form;
