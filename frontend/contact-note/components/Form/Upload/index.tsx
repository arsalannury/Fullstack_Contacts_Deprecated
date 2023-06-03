"use client";

import React from "react";

interface IProps {
  onChange: (event: any) => void;
}

const Form: React.FC<IProps> = ({ onChange }) => {
  return (
    <div className="m-14">
      <label
        style={{ fontFamily: "IRAN_SANS" }}
        className="cursor-pointer p-3 border border-slate-700 border-dashed transition-all 
      hover:bg-slate-700 hover:text-slate-300"
      >
        Upload Photo
        <input
          className="hidden"
          type="file"
          onChange={(event) => onChange(event.target.files![0])}
        />
      </label>
    </div>
  );
};

export default Form;
