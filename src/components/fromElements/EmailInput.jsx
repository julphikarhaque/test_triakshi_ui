import { Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";

function EmailInput({
    label = "Email",
    leftIcon = <Mail size={20} />,
    helperText,
    error,
    inputClassName,
    inputProps = {},
}) {
    return (
        <>
        <div className="flex w-full flex-col gap-2">
        {label && (
            <label className="text-sm font-medium text-dark-700">
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
            type="email"
            {...inputProps}
            className={twMerge(
                "h-11 w-full rounded-xl border border-dark-300 bg-dark pl-10 pr-4 outline-none transition focus:border-blue-500",
                inputClassName,
            )}
            />
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
        </>
        
    );
}

export default EmailInput;