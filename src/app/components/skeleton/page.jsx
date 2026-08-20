"use client";

import Skeleton from "@/components/Skeleton";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function SkeletonPage() {
  return (
    <ComponentPage
      title="Skeleton"
      description="A loading placeholder used to represent content while data is being loaded."
    >
      <Section
        title="Basic Usage"
        description="Use Skeleton as a placeholder while content is loading."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Skeleton />
          </div>
        </Preview>

        <CodeBlock>{`<Skeleton />`}</CodeBlock>
      </Section>

      <Section
        title="Custom Size"
        description="Use className to control the size and shape of the skeleton."
      >
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Skeleton className="h-4 w-3/4" />

            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        </Preview>

        <CodeBlock>
          {`<Skeleton className="h-4 w-3/4" />

            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-10 w-full rounded-xl" />`}
        </CodeBlock>
      </Section>

      <Section
        title="Text Loading"
        description="Combine multiple skeletons to represent text content."
      >
        <Preview>
          <div className="w-full max-w-md space-y-3">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Preview>

        <CodeBlock>
          {`<div className="space-y-3">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>`}
        </CodeBlock>
      </Section>

      <Section
        title="Avatar Placeholder"
        description="Create a circular loading placeholder for profile images."
      >
        <Preview>
          <Skeleton className="h-12 w-12 rounded-full" />
        </Preview>

        <CodeBlock>
          {`<Skeleton className="h-12 w-12 rounded-full" />`}
        </CodeBlock>
      </Section>

      <Section
        title="Custom Shape"
        description="Skeleton can represent different UI shapes using Tailwind classes."
      >
        <Preview>
          <div className="flex w-full max-w-md items-center gap-4">
            <Skeleton className="h-14 w-14 rounded-full" />

            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        </Preview>

        <CodeBlock>
          {`<div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full" />

              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
