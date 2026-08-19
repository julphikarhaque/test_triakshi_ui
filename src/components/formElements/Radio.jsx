"use client";

import { useId } from "react";
import { twMerge } from "tailwind-merge";

function Radio({
  label = "Radio",
  helperText,
  error,
  radioClassName,
  inputProps = {},
}) {
  const generatedId = useId();

  const radioId = inputProps.id || generatedId;

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={radioId}
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          {...inputProps}
          id={radioId}
          type="radio"
          className="peer sr-only"
        />

        <div
          className={twMerge(
            "relative h-5 w-5 shrink-0 rounded-full border border-zinc-300 bg-white transition-all duration-200 peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:after:absolute peer-checked:after:left-1/2 peer-checked:after:top-1/2 peer-checked:after:h-2 peer-checked:after:w-2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:rounded-full peer-checked:after:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30 peer-disabled:cursor-not-allowed peer-disabled:bg-zinc-100 peer-disabled:opacity-60",
            radioClassName,
          )}
        />

        <div className="flex flex-col">
          {label && (
            <span className="text-sm font-medium text-zinc-900">{label}</span>
          )}

          {helperText && !error && (
            <span className="text-xs text-zinc-400">{helperText}</span>
          )}

          {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
      </label>
    </div>
  );
}

export default Radio;
