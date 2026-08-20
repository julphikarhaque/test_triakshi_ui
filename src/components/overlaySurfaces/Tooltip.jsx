"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function Tooltip({
  content,
  children,
  side = "top",
  disabled = false,
  delay = 200,
  className,
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (disabled || !content) return;

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const positions = {
    top: {
      wrapper: "bottom-full left-1/2 mb-2 -translate-x-1/2",
      arrow:
        "left-1/2 top-full -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
    },

    bottom: {
      wrapper: "left-1/2 top-full mt-2 -translate-x-1/2",
      arrow:
        "left-1/2 bottom-full -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
    },

    left: {
      wrapper: "right-full top-1/2 mr-2 -translate-y-1/2",
      arrow:
        "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
    },

    right: {
      wrapper: "left-full top-1/2 ml-2 -translate-y-1/2",
      arrow:
        "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent",
    },
  };

  const position = positions[side] || positions.top;

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {open && (
        <div
          role="tooltip"
          className={twMerge(
            `
              pointer-events-none
              absolute
              z-50
              whitespace-nowrap
              rounded-lg
              bg-zinc-900
              px-3
              py-2
              text-xs
              font-medium
              text-white
              shadow-lg
            `,
            position.wrapper,
            className,
          )}
        >
          {content}

          <span
            className={twMerge(
              `
                absolute
                h-0
                w-0
                border-4
                border-zinc-900
              `,
              position.arrow,
            )}
          />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
