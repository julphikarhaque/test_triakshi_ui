"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Drawer({
  open = false,
  onClose,
  title,
  description,
  children,
  footer,
  showClose = true,
  side = "right",
  className,
}) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const positions = {
    right: {
      wrapper: "inset-y-0 right-0",
      panel: "h-full w-full max-w-md",
      animation: "animate-in slide-in-from-right",
    },

    left: {
      wrapper: "inset-y-0 left-0",
      panel: "h-full w-full max-w-md",
      animation: "animate-in slide-in-from-left",
    },

    top: {
      wrapper: "inset-x-0 top-0",
      panel: "w-full max-h-[85vh]",
      animation: "animate-in slide-in-from-top",
    },

    bottom: {
      wrapper: "inset-x-0 bottom-0",
      panel: "w-full max-h-[85vh]",
      animation: "animate-in slide-in-from-bottom",
    },
  };

  const position = positions[side] || positions.right;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "drawer-title" : undefined}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close drawer"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div
        onClick={(event) => event.stopPropagation()}
        className={twMerge(
          `
            absolute
            ${position.wrapper}
            ${position.panel}
            ${position.animation}
            overflow-hidden
            border-zinc-200
            bg-white
            shadow-2xl
          `,
          side === "right" && "border-l",
          side === "left" && "border-r",
          side === "top" && "border-b",
          side === "bottom" && "border-t",
          className,
        )}
      >
        {/* Header */}
        {(title || description || showClose) && (
          <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-6 py-5">
            <div className="min-w-0">
              {title && (
                <h2
                  id="drawer-title"
                  className="text-lg font-semibold text-zinc-900"
                >
                  {title}
                </h2>
              )}

              {description && (
                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              )}
            </div>

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="
                  shrink-0
                  rounded-lg
                  p-2
                  text-zinc-400
                  transition
                  hover:bg-zinc-100
                  hover:text-zinc-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500/30
                "
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto px-6 py-5">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-zinc-200 bg-zinc-50 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
