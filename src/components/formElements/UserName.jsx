import { User } from "lucide-react";
import { twMerge } from "tailwind-merge";

function UsernameInput({
    label = "Username",
    leftIcon = <User size={20} />,
    helperText,
    error,
    prefix,
    inputClassName,
    inputProps = {},
    }) {
    return (
        <div className="flex w-full flex-col gap-2">

        {label && (
            <label className="text-sm font-medium text-white-700">
            {label}
            </label>
        )}

        <div className="relative">

            {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white-400">
                {leftIcon}
            </span>
            )}

            {prefix && (
            <span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-zinc-500">
                {prefix}
            </span>
            )}

            <input
            type="text"
            autoComplete="username"
            {...inputProps}
            className={twMerge(
                `h-11 w-full
                rounded-xl
                border border-white-300 bg-black
                pr-4
                text-sm
                outline-none
                transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`,
                prefix ? "pl-20" : "pl-10",
                error &&
                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                inputClassName
            )}
            />

        </div>

        {helperText && !error && (
            <p className="text-xs text-zinc-500">
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

export default UsernameInput;