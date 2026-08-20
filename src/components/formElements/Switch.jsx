"use client";

import { useId } from "react";
import { twMerge } from "tailwind-merge";

function Switch({
  label = "Switch",
  helperText,
  error,
  switchClassName,
  inputProps = {},
}) {
  const generatedId = useId();
  const switchId = inputProps.id || generatedId;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={switchId}
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          {...inputProps}
          id={switchId}
          type="checkbox"
          role="switch"
          className="peer sr-only"
        />

        <div
          className={twMerge(
            "relative h-6 w-11 rounded-full bg-zinc-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:transition-transform after:duration-200 peer-checked:after:translate-x-5",
            switchClassName,
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

export default Switch;
