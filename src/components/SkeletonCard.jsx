import { twMerge } from "tailwind-merge";
import Skeleton from "./Skeleton";

function SkeletonCard() {
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
        `,
      )}
    >
      <div className="flex items-start gap-4">
        <Skeleton
          className="
            h-14
            w-14
            shrink-0
            rounded-full
          "
        />

        <div className="flex flex-1 flex-col gap-3">
          <Skeleton
            className="
              h-4
              w-3/4
            "
          />

          <Skeleton
            className="
              h-4
              w-1/2
            "
          />

          <Skeleton
            className="
              h-4
              w-full
            "
          />

          <Skeleton
            className="
              h-4
              w-4/5
            "
          />
        </div>
      </div>

      <Skeleton
        className="
          mt-6
          h-36
          w-full
          rounded-xl
        "
      />
    </div>
  );
}

export default SkeletonCard;
