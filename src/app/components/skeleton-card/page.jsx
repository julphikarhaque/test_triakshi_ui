"use client";

import SkeletonCard from "@/components/SkeletonCard";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function SkeletonCardPage() {
  return (
    <ComponentPage
      title="Skeleton Card"
      description="A pre-built loading card for displaying content placeholders while data is loading."
    >
      <Section
        title="Basic Usage"
        description="Use SkeletonCard when a complete card-shaped loading state is needed."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SkeletonCard />
          </div>
        </Preview>

        <CodeBlock>{`<SkeletonCard />`}</CodeBlock>
      </Section>

      <Section
        title="Multiple Cards"
        description="Display multiple skeleton cards while loading a list or grid of content."
      >
        <Preview>
          <div className="grid w-full max-w-3xl gap-4 md:grid-cols-2">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </Preview>

        <CodeBlock>
          {`<div className="grid gap-4 md:grid-cols-2">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>`}
        </CodeBlock>
      </Section>

      <Section
        title="Loading State Example"
        description="SkeletonCard can be displayed while the actual card content is being fetched."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SkeletonCard />
          </div>
        </Preview>

        <CodeBlock>
          {`{isLoading ? (
              <SkeletonCard />
            ) : (
              <Card>
                Your content
              </Card>
            )}`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
