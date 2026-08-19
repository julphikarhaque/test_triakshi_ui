import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Select({
  label = "Select",
  helperText,
  error,
  options = [],
  selectClassName,
  inputProps = {},
}) {
  const generatedId = useId();
  const selectId = inputProps.id || generatedId;
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-zinc-700" htmlFor={selectId}>
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...inputProps}
          id={selectId}
          className={twMerge(
            `
    h-11
    w-full
    appearance-none
    rounded-xl
    border
    border-zinc-300
    bg-black
    px-4
    pr-10
    text-sm
    outline-none
    transition-all
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20
    disabled:cursor-not-allowed
    disabled:opacity-50
  `,
            selectClassName,
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      </div>

      {helperText && !error && (
        <p className="text-xs text-zinc-500">{helperText}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default Select;
