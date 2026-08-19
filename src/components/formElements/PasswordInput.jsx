"use client";

import { useId, useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { twMerge } from "tailwind-merge";

function PasswordInput({
  label = "Password",
  leftIcon = <Lock size={20} />,
  helperText,
  error,
  inputClassName,
  inputProps = {},
}) {
  const generatedId = useId();
  const passwordId = inputProps.id || generatedId;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={passwordId}
          className="text-sm font-medium text-zinc-900"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
            {leftIcon}
          </span>
        )}

        <input
          {...inputProps}
          id={passwordId}
          type={showPassword ? "text" : "password"}
          className={twMerge(
            `
              h-11
              w-full
              rounded-xl
              border
              border-zinc-300
              bg-white
              pl-10
              pr-11
              text-zinc-900
              outline-none
              transition
              placeholder:text-zinc-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
              disabled:cursor-not-allowed
              disabled:bg-zinc-100
              disabled:text-zinc-400
            `,
            inputClassName,
          )}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-zinc-500
            transition
            hover:text-zinc-900
          "
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {helperText && !error && (
        <p className="text-xs text-zinc-500">{helperText}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default PasswordInput;
