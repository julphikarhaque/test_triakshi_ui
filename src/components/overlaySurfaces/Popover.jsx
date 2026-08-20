"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function Popover({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange,
  side = "bottom",
  align = "center",
  disabled = false,
  className,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const containerRef = useRef(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (value) => {
    if (disabled) return;

    if (!isControlled) {
      setInternalOpen(value);
    }

    onOpenChange?.(value);
  };

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const positions = {
    top: {
      wrapper: "bottom-full mb-2",
    },

    bottom: {
      wrapper: "top-full mt-2",
    },

    left: {
      wrapper: "right-full mr-2",
    },

    right: {
      wrapper: "left-full ml-2",
    },
  };

  const alignments = {
    start: {
      top: "left-0",
      bottom: "left-0",
      left: "top-0",
      right: "top-0",
    },

    center: {
      top: "left-1/2 -translate-x-1/2",
      bottom: "left-1/2 -translate-x-1/2",
      left: "top-1/2 -translate-y-1/2",
      right: "top-1/2 -translate-y-1/2",
    },

    end: {
      top: "right-0",
      bottom: "right-0",
      left: "bottom-0",
      right: "bottom-0",
    },
  };

  const position = positions[side] || positions.bottom;
  const alignment = alignments[align]?.[side] || alignments.center[side];

  return (
    <div ref={containerRef} className="relative inline-flex">
      <div
        onClick={() => {
          if (!disabled) {
            setOpen(!open);
          }
        }}
      >
        {trigger}
      </div>

      {open && (
        <div
          className={twMerge(
            `
              absolute
              z-50
              min-w-56
              rounded-xl
              border
              border-zinc-200
              bg-white
              p-4
              shadow-xl
            `,
            position.wrapper,
            alignment,
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Popover;
