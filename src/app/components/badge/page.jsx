"use client";

import Badge from "@/components/formElements/Badge";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="A compact status indicator for labels, categories, states, and short pieces of metadata."
    >
      <Section
        title="Basic Usage"
        description="Use a badge to display a short piece of information."
      >
        <Preview>
          <Badge>New</Badge>
        </Preview>

        <CodeBlock>
          {`<Badge>
  New
</Badge>`}
        </CodeBlock>
      </Section>

      <Section
        title="Variants"
        description="Use different variants to communicate different types of information."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>

            <Badge variant="success">Success</Badge>

            <Badge variant="warning">Warning</Badge>

            <Badge variant="error">Error</Badge>

            <Badge variant="info">Info</Badge>
          </div>
        </Preview>

        <CodeBlock>
          {`<Badge variant="default">
  Default
</Badge>

<Badge variant="success">
  Success
</Badge>

<Badge variant="warning">
  Warning
</Badge>

<Badge variant="error">
  Error
</Badge>

<Badge variant="info">
  Info
</Badge>`}
        </CodeBlock>
      </Section>

      <Section
        title="Sizes"
        description="Choose a badge size based on the surrounding content."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm">Small</Badge>

            <Badge size="md">Medium</Badge>

            <Badge size="lg">Large</Badge>
          </div>
        </Preview>

        <CodeBlock>
          {`<Badge size="sm">
  Small
</Badge>

<Badge size="md">
  Medium
</Badge>

<Badge size="lg">
  Large
</Badge>`}
        </CodeBlock>
      </Section>

      <Section
        title="Status Examples"
        description="Badges work well for representing common application states."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success">Active</Badge>

            <Badge variant="warning">Pending</Badge>

            <Badge variant="error">Failed</Badge>

            <Badge variant="info">Processing</Badge>
          </div>
        </Preview>

        <CodeBlock>
          {`<Badge variant="success">
  Active
</Badge>

<Badge variant="warning">
  Pending
</Badge>

<Badge variant="error">
  Failed
</Badge>

<Badge variant="info">
  Processing
</Badge>`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the badge using Tailwind classes."
      >
        <Preview>
          <Badge
            variant="info"
            badgeClassName="
              rounded-lg
              px-4
            "
          >
            AI Agent
          </Badge>
        </Preview>

        <CodeBlock>
          {`<Badge
  variant="info"
  badgeClassName="
    rounded-lg
    px-4
  "
>
  AI Agent
</Badge>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
