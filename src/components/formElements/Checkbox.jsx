"use client";

import { useId } from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Checkbox({
  label = "Checkbox",
  helperText,
  error,
  checkboxClassName,
  inputProps = {},
}) {
  const {
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    ...restInputProps
  } = inputProps;

  const [uncontrolledChecked, setUncontrolledChecked] =
    useState(defaultChecked);

  const isControlled = controlledChecked !== undefined;

  const checked = isControlled
    ? controlledChecked
    : uncontrolledChecked;

  function handleChange(event) {
    if (!isControlled) {
      setUncontrolledChecked(event.target.checked);
    }

    onChange?.(event);
  }

  const generatedId = useId();
  const checkboxId = inputProps.id || generatedId;

  return (
    <div className="flex w-full flex-col gap-2">
      <label className="flex cursor-pointer items-start gap-3" htmlFor={checkboxId}>
        <input
          {...restInputProps}
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="peer sr-only"
        />

        <div
          className={twMerge(
            `
            flex h-5 w-5 shrink-0
            items-center justify-center
            rounded-md
            border
            border-zinc-300
            bg-white
            transition-all
            duration-200

            peer-checked:border-blue-600
            peer-checked:bg-blue-600

            peer-focus-visible:ring-2
            peer-focus-visible:ring-blue-500/30

            peer-disabled:cursor-not-allowed
            peer-disabled:bg-zinc-100
            peer-disabled:opacity-60
            `,
            checkboxClassName
          )}
        >
          {checked && (
            <Check
              size={14}
              strokeWidth={3}
              className="text-white"
            />
          )}
        </div>

        <div className="flex flex-col">
          {label && (
            <span className="text-sm font-medium text-white-700">
              {label}
            </span>
          )}

          {helperText && !error && (
            <span className="text-xs text-zinc-500">
              {helperText}
            </span>
          )}

          {error && (
            <span className="text-xs text-red-500">
              {error}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

export default Checkbox;