import { useId } from "react";
import { twMerge } from "tailwind-merge";

function Textarea({
  label = "Message",
  helperText,
  error,
  textareaClassName,
  textareaProps = {},
}) {
  const generatedId = useId();
  const textareaId = textareaProps.id || generatedId;

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="
                text-sm
                font-medium
                text-zinc-900
            "
        >
          {label}
        </label>
      )}

      <textarea
        {...textareaProps}
        id={textareaId}
        className={twMerge(
          `
                min-h-28
                w-full
                resize-y
                rounded-xl
                border
                border-zinc-300
                bg-black
                px-4
                py-3
                text-sm
                outline-none
                transition
                placeholder:text-zinc-400
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                disabled:cursor-not-allowed
                disabled:bg-zinc-100
            `,
          error &&
            `
                border-red-500
                focus:border-red-500
                focus:ring-red-500/20
                `,
          textareaClassName,
        )}
      />

      {helperText && !error && (
        <p
          className="
                text-xs
                text-zinc-500
            "
        >
          {helperText}
        </p>
      )}

      {error && (
        <p
          className="
                text-xs
                text-red-500
            "
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Textarea;
