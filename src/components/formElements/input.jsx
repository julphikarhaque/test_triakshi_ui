import { useId } from "react";
import { Mail, Search, User, Hash } from "lucide-react";

import { twMerge } from "tailwind-merge";

const defaultIcons = {
  email: <Mail size={20} />,
  search: <Search size={20} />,
  number: <Hash size={20} />,
  user: <User size={20} />,
};

function Input({
  type = "user",
  label,
  leftIcon,
  helperText,
  error,
  inputClassName,
  inputProps = {},
}) {
  const generatedId = useId();
  const inputId = inputProps.id || generatedId;

  const icon = leftIcon ?? defaultIcons[type];

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-zinc-900" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            {icon}
          </span>
        )}

        <input
          {...inputProps}
          id={inputId}
          type={type}
          className={twMerge(
            `
                h-11
                w-full
                rounded-xl
                border
                border-white-300
                bg-black
                pl-10
                pr-4
                text-sm
                outline-none
                transition

                placeholder:text-white-400

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                disabled:cursor-not-allowed
                disabled:bg-black-100
                `,
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
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

export default Input;
