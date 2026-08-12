"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

function MultiSelect({
  label = "Select Options",
  options = [],
  placeholder = "Select options...",
  helperText,
  error,
  value = [],
  onChange,
  multiSelectClassName,
}) {
  const generatedId = useId();
  const containerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const selectedOptions = options.filter((option) =>
    value.includes(option.value)
  );

  const toggleOption = (optionValue) => {
    const isSelected = value.includes(optionValue);

    const newValue = isSelected
      ? value.filter((item) => item !== optionValue)
      : [...value, optionValue];

    onChange?.(newValue);
  };

  const removeOption = (optionValue) => {
    onChange?.(
      value.filter((item) => item !== optionValue)
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col gap-2"
    >
      {label && (
        <label
          htmlFor={generatedId}
          className="text-sm font-medium text-zinc-700"
        >
          {label}
        </label>
      )}

      <div className="relative">

        {/* Selected Options */}
        <button
          id={generatedId}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={twMerge(
            `
              flex
              min-h-11
              w-full
              items-center
              justify-between
              gap-2
              rounded-xl
              border
              border-zinc-300
              bg-white
              px-3
              py-2
              text-left
              outline-none
              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            `,
            error &&
              `
                border-red-500
                focus:border-red-500
                focus:ring-red-500/20
              `,
            multiSelectClassName
          )}
        >
          <div className="flex flex-1 flex-wrap gap-2">

            {selectedOptions.length === 0 && (
              <span className="text-sm text-zinc-400">
                {placeholder}
              </span>
            )}

            {selectedOptions.map((option) => (
              <span
                key={option.value}
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-md
                  bg-zinc-100
                  px-2
                  py-1
                  text-xs
                  font-medium
                  text-zinc-700
                "
              >
                {option.label}

                <span
                  role="button"
                  tabIndex={0}
                  onClick={(event) => {
                    event.stopPropagation();
                    removeOption(option.value);
                  }}
                  className="
                    cursor-pointer
                    text-zinc-400
                    hover:text-zinc-700
                  "
                >
                  <X size={14} />
                </span>
              </span>
            ))}

          </div>

          <ChevronDown
            size={18}
            className={twMerge(
              `
                shrink-0
                text-zinc-400
                transition-transform
              `,
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className="
              absolute
              left-0
              top-full
              z-50
              mt-2
              max-h-60
              w-full
              overflow-y-auto
              rounded-xl
              border
              border-zinc-200
              bg-white
              p-1
              shadow-lg
            "
          >
            {options.length === 0 ? (
              <p className="px-3 py-2 text-sm text-zinc-500">
                No options available.
              </p>
            ) : (
              options.map((option) => {
                const isSelected = value.includes(
                  option.value
                );

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      toggleOption(option.value)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2
                      text-left
                      text-sm
                      text-zinc-700
                      transition
                      hover:bg-zinc-100
                    "
                  >
                    {/* Checkbox */}
                    <span
                      className={twMerge(
                        `
                          flex
                          h-4
                          w-4
                          shrink-0
                          items-center
                          justify-center
                          rounded
                          border
                          border-zinc-300
                          bg-white
                          transition
                        `,
                        isSelected &&
                          `
                            border-blue-600
                            bg-blue-600
                          `
                      )}
                    >
                      {isSelected && (
                        <Check
                          size={12}
                          className="text-white"
                        />
                      )}
                    </span>

                    {/* Option */}
                    <span>
                      {option.label}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        )}

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

export default MultiSelect;