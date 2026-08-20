"use client";

import Avatar from "@/components/Avatar";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      description="A flexible avatar component for displaying profile images with fallback content."
    >
      <Section
        title="Basic Usage"
        description="Display a user's profile image."
      >
        <Preview>
          <Avatar src="/man.png" fallback="JD" />
        </Preview>

        <CodeBlock>
          {`<Avatar
              src="/man.png"
              fallback="JD"
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Fallback"
        description="Use fallback text when an image is unavailable."
      >
        <Preview>
          <Avatar fallback="JD" />
        </Preview>

        <CodeBlock>
          {`<Avatar
              fallback="JD"
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Sizes"
        description="Choose an avatar size appropriate for its context."
      >
        <Preview>
          <div className="flex items-center gap-6">
            <Avatar fallback="SM" size="sm" />

            <Avatar fallback="MD" size="md" />

            <Avatar fallback="LG" size="lg" />

            <Avatar fallback="XL" size="xl" />
          </div>
        </Preview>

        <CodeBlock>
          {`<Avatar
              fallback="SM"
              size="sm"
            />

            <Avatar
              fallback="MD"
              size="md"
            />

            <Avatar
              fallback="LG"
              size="lg"
            />

            <Avatar
              fallback="XL"
              size="xl"
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Image with Size"
        description="Combine an image source with a custom avatar size."
      >
        <Preview>
          <div className="flex items-center gap-6">
            <Avatar src="/man.png" fallback="JD" size="md" />

            <Avatar src="/man.png" fallback="JD" size="lg" />

            <Avatar src="/man.png" fallback="JD" size="xl" />
          </div>
        </Preview>

        <CodeBlock>
          {`<Avatar
              src="/man.png"
              fallback="JD"
              size="lg"
            />`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
