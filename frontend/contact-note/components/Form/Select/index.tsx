"use client";

import React from "react";

interface IProps {
  name: string;
  id: undefined | string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<any>;
  children: React.ReactNode;
  reacthookformerror: any;
  registerhookform: any;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <div className="m-14">
      <select
        title="select"
        {...props}
        {...props.registerhookform(props.name, {
          required: true})}
        className="focus:shadow-md
               appearance-none
               p-2 lg:w-1/3 md:w-2/3 w-full
               outline-none
               block
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"
      >
        {props.children}
      </select>
      {props.reacthookformerror[props.name] && (
        <span className="text-red-800 text-sm ml-2">{`${props.name} is required`}</span>
      )}
    </div>
  );
};

export default Form;
