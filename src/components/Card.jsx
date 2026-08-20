import { twMerge } from "tailwind-merge";

function Card({ children, cardClassName }) {
  return (
    <div
      className={twMerge(
        `
          w-full
          rounded-2xl
          border
          border-zinc-200
          bg-white
          p-6
          shadow-sm
        `,
        cardClassName,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
