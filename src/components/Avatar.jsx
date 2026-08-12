import { twMerge } from "tailwind-merge";

const sizes = {
    sm: `
        h-8
        w-8
        text-xs
    `,

    md: `
        h-10
        w-10
        text-sm
    `,

    lg: `
        h-12
        w-12
        text-base
    `,

    xl: `
        h-16
        w-16
        text-lg
    `,
    };

    function Avatar({
    src,
    alt = "Avatar",
    fallback = "U",
    size = "md",
    avatarClassName,
    imageProps = {},
    }) {
    return (
        <div
        className={twMerge(
            `
            flex
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-zinc-200
            font-medium
            text-zinc-600
            `,
            sizes[size],
            avatarClassName
        )}
        >
        {src ? (
            <img
            {...imageProps}
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            />
        ) : (
            <span>{fallback}</span>
        )}
        </div>
    );
}

export default Avatar;