"use client";

import React from "react";

interface IProps {
  name: string;
  id: undefined | string;
  value: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  reacthookformerror: any;
  registerhookform: any;
}

const Form: React.FC<IProps> = (props) => {
  return (
    <div className="m-14">
      <input
        {...props.registerhookform(
          props.name,
          props.name === "name"
            ? { required: true, minLength: 3, maxLength: 60 }
            : {
                required: true,
                pattern: /^[0-9]+$/,
                minLength: 10,
                maxLength: 11,
              }
        )}
        {...props}
        className={`focus:shadow-md
               p-2  lg:w-1/3 md:w-2/3 w-full
               outline-none
               block
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600`}
      />
      {props.reacthookformerror[props.name] && (
        <span className="text-red-800 text-sm ml-2">{`enter ${props.name} with correct format is required`}</span>
      )}
    </div>
  );
};

export default Form;
