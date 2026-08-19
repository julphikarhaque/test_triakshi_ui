"use client";

import Button from "@/components/formElements/Button";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";
import { ArrowRight, Plus } from "lucide-react";

export default function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="A flexible button component with multiple variants, icons, and customization options."
    >
      {/* Basic */}

      <Section
        title="Basic Usage"
        description="Use the Button component for actions and interactions."
      >
        <Preview>
          <Button>Add Customer</Button>
        </Preview>

        <CodeBlock>
          {`<Button>
  Add Customer
</Button>`}
        </CodeBlock>
      </Section>

      {/* Variants */}

      <Section
        title="Variants"
        description="Choose a visual style that matches the action."
      >
        <Preview>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="destructive">Destructive</Button>
          </div>
        </Preview>

        <CodeBlock>
          {`<Button variant="primary">
  Primary
</Button>

<Button variant="secondary">
  Secondary
</Button>

<Button variant="destructive">
  Destructive
</Button>`}
        </CodeBlock>
      </Section>

      {/* Icons */}

      <Section
        title="With Icons"
        description="Add icons before or after the button label."
      >
        <Preview>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<Plus size={18} />}>Add Customer</Button>

            <Button rightIcon={<ArrowRight size={18} />}>Continue</Button>

            <Button
              leftIcon={<Plus size={18} />}
              rightIcon={<ArrowRight size={18} />}
            >
              Add Customer
            </Button>
          </div>
        </Preview>

        <CodeBlock>
          {`<Button leftIcon={<Plus size={18} />}>
  Add Customer
</Button>

<Button rightIcon={<ArrowRight size={18} />}>
  Continue
</Button>`}
        </CodeBlock>
      </Section>

      {/* Disabled */}

      <Section
        title="Disabled"
        description="Disable the button when an action is unavailable."
      >
        <Preview>
          <Button
            variant="primary"
            buttonProps={{
              disabled: true,
            }}
          >
            Disabled
          </Button>
        </Preview>

        <CodeBlock>
          {`<Button
  buttonProps={{
    disabled: true,
  }}
>
  Disabled
</Button>`}
        </CodeBlock>
      </Section>

      {/* Customization */}

      <Section
        title="Customization"
        description="Customize the component using Tailwind classes."
      >
        <Preview>
          <Button
            variant="primary"
            buttonClassName="
              rounded-full
              px-8
            "
          >
            Custom Button
          </Button>
        </Preview>

        <CodeBlock>
          {`<Button
  buttonClassName="
    rounded-full
    px-8
  "
>
  Custom Button
</Button>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
