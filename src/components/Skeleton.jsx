import { twMerge } from "tailwind-merge";

function Skeleton({
  className,
}) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        `
          animate-pulse
          rounded-md
          bg-zinc-200
        `,
        className
      )}
    />
  );
}

export default Skeleton;