"use client";

import { Upload } from "lucide-react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

function FileUpload({
    label = "Upload File",
    helperText,
    error,
    uploadClassName,
    inputProps = {},
    }) {
    const generatedId = useId();
    const inputId = inputProps.id || generatedId;

    return (
        <div className="flex w-full flex-col gap-2">

        {label && (
            <label
            htmlFor={inputId}
            className="text-sm font-medium text-white-700"
            >
            {label}
            </label>
        )}

        <label
            htmlFor={inputId}
            className={twMerge(
            `
                flex
                min-h-32
                w-full
                cursor-pointer
                flex-col
                items-center
                justify-center
                gap-2
                rounded-xl
                border-2
                border-dashed
                border-zinc-300
                bg-black
                px-6
                py-6
                text-center
                transition

                hover:border-blue-400
                hover:bg-blue-50/50

                focus-within:border-blue-500
                focus-within:ring-2
                focus-within:ring-blue-500/20
            `,
            error &&
                `
                border-red-500
                hover:border-red-500
                focus-within:border-red-500
                focus-within:ring-red-500/20
                `,
            uploadClassName
            )}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Upload size={20} />
            </div>

            <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-zinc-700">
                Click to upload
            </span>

            <span className="text-xs text-zinc-500">
                Choose a file from your device
            </span>
            </div>

            <input
            {...inputProps}
            id={inputId}
            type="file"
            className="sr-only"
            />
        </label>

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

export default FileUpload;