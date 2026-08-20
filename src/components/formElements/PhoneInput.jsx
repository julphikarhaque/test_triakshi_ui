"use client";

import { useId } from "react";
import { Phone } from "lucide-react";
import { twMerge } from "tailwind-merge";

function PhoneInput({
  label = "Phone Number",
  leftIcon = <Phone size={20} />,
  helperText,
  error,
  countryName = "IN",
  countryCode = "+91",
  maxLength = 10,
  inputClassName,
  inputProps = {},
}) {
  const generatedId = useId();
  const phoneId = inputProps.id || generatedId;

  const handleChange = (event) => {
    event.target.value = event.target.value
      .replace(/\D/g, "")
      .slice(0, maxLength);

    inputProps.onChange?.(event);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={phoneId} className="text-sm font-medium text-zinc-900">
          {label}
        </label>
      )}

      <div
        className="
            flex
            h-11
            overflow-hidden
            rounded-xl
            border
            border-zinc-300
            bg-black
            focus-within:border-blue-500
            "
      >
        <div
          className="
            flex
            items-center
            gap-2
            border-r
            border-zinc-300
            px-3
            text-zinc-100
          "
        >
          <span>{countryName}</span>

          <span className="text-sm">{countryCode}</span>
        </div>

        {leftIcon && (
          <div className="flex items-center px-3 text-zinc-400">{leftIcon}</div>
        )}

        <input
          {...inputProps}
          id={phoneId}
          type="tel"
          maxLength={maxLength}
          onChange={handleChange}
          className={twMerge(
            `
                h-full
                w-full
                bg-transparent
                pr-4
                text-sm
                text-zinc-100
                outline-none
                placeholder:text-zinc-400
                `,
            inputClassName,
          )}
        />
      </div>

      {helperText && !error && (
        <p className="text-xs text-zinc-500">{helperText}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default PhoneInput;
