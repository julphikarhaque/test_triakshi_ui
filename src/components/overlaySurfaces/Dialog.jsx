"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Dialog({
  open = false,
  onClose,
  title,
  description,
  children,
  footer,
  showClose = true,
  size = "md",
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

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div
        onClick={(event) => event.stopPropagation()}
        className={twMerge(
          `
            relative
            z-10
            w-full
            ${sizes[size] || sizes.md}
            overflow-hidden
            rounded-2xl
            border
            border-zinc-200
            bg-white
            shadow-2xl
            `,
          className,
        )}
      >
        {/* Header */}
        {(title || description || showClose) && (
          <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-6 py-5">
            <div className="min-w-0">
              {title && (
                <h2
                  id="dialog-title"
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
                aria-label="Close dialog"
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
        <div className="px-6 py-5">{children}</div>

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

export default Dialog;
