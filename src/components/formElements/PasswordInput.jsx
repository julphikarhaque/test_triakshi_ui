"use client";

import { useId } from "react";
import { useState } from "react";
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
            <label className="text-sm font-medium text-dark-700" htmlFor={passwordId}>
            {label}
            </label>
        )}

        <div className="relative">
            {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400">
                {leftIcon}
            </span>
            )}

            <input
            type={showPassword ? "text" : "password"}
            {...inputProps}
            id={passwordId}
            className={twMerge(
                "h-11 w-full rounded-xl border border-dark-300 bg-dark pl-10 pr-11 outline-none transition focus:border-blue-500",
                inputClassName
            )}
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600"
            >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>

        {helperText && (
            <p className="text-xs text-dark-500">
            {helperText}
            </p>
        )}

        {error && (
            <p className="text-xs text-red-500">
            {error}
            </p>
        )}
        </div>
    );
}

export default PasswordInput;