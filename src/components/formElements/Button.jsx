import { twMerge } from "tailwind-merge";

const variants = {
    primary: `
        bg-zinc-900
        text-white
        hover:bg-zinc-700
        focus:ring-blue-500
    `,

    secondary: `
        bg-zinc-100
        text-zinc-900
        hover:bg-zinc-200
        focus:ring-blue-500
    `,

    destructive: `
        bg-red-600
        text-white
        hover:bg-red-700
        focus:ring-red-500
    `,
    };

    const sizes = {
    sm: `
        h-9
        px-3
        text-sm
    `,

    md: `
        h-11
        px-5
        text-sm
    `,

    lg: `
        h-12
        px-6
        text-base
    `,
    };

    function Button({
    children = "Button",
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    buttonClassName,
    buttonProps = {},
    }) {
    return (
        <button
        {...buttonProps}
        className={twMerge(
            `
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-md
            font-medium
            outline-none
            transition-all
            duration-200
            focus:ring-2
            focus:ring-offset-2
            disabled:cursor-not-allowed
            disabled:opacity-40
            `,
            variants[variant],
            sizes[size],
            buttonClassName
        )}
        >
        {leftIcon}

        {children}

        {rightIcon}
        </button>
    );
}

export default Button;