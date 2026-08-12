import React from "react";
import { twMerge } from "tailwind-merge";

function inputWithLabel({ name, inputClassName, inputProps , labelProps}) {
  return (
    <div className=" h-40 w-fit flex flex-col justify-center items-center">
      <label {...labelProps} className="" htmlFor="">
        {name}
      </label>
      <input
        {...inputProps}
        className={twMerge(
          " bg-gray-600 border border-white/12 rounded-xl",
          inputClassName,
        )}
      />
    </div>
  );
}

export default inputWithLabel;
