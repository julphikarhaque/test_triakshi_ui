import { twMerge } from "tailwind-merge";

const variants = {
    default: `
        bg-zinc-100
        text-zinc-700
    `,

    success: `
        bg-green-100
        text-green-700
    `,

    warning: `
        bg-yellow-100
        text-yellow-700
    `,

    error: `
        bg-red-100
        text-red-700
    `,

    info: `
        bg-blue-100
        text-blue-700
    `,
    };

    const sizes = {
    sm: `
        px-2
        py-0.5
        text-xs
    `,

    md: `
        px-2.5
        py-1
        text-xs
    `,

    lg: `
        px-3
        py-1.5
        text-sm
    `,
    };

    function Badge({
    children = "Badge",
    variant = "default",
    size = "md",
    badgeClassName,
    }) {
    return (
        <span
        className={twMerge(
            `
            inline-flex
            w-fit
            items-center
            justify-center
            rounded-full
            font-medium
            `,
            variants[variant],
            sizes[size],
            badgeClassName
        )}
        >
        {children}
        </span>
    );
}

export default Badge;