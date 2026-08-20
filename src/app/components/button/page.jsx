"use client";

import Button from "@/components/formElements/Button";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";
import { ArrowRight, Plus, Trash2 } from "lucide-react";

export default function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="A flexible button component with variants, icons, disabled states, and custom styling."
    >
      {/* Basic Usage */}

      <Section
        title="Basic Usage"
        description="Use Button for actions that users can perform."
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
        description="Choose a visual style based on the importance and meaning of the action."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-4">
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
        description="Add icons before or after the button content."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-4">
            <Button leftIcon={<Plus size={18} />}>Add Customer</Button>

            <Button rightIcon={<ArrowRight size={18} />}>Continue</Button>

            <Button leftIcon={<Trash2 size={18} />} variant="destructive">
              Delete
            </Button>
          </div>
        </Preview>

        <CodeBlock>
          {`<Button
              leftIcon={<Plus size={18} />}
            >
              Add Customer
            </Button>

            <Button
              rightIcon={<ArrowRight size={18} />}
            >
              Continue
            </Button>

            <Button
              leftIcon={<Trash2 size={18} />}
              variant="destructive"
            >
              Delete
            </Button>`}
        </CodeBlock>
      </Section>

      {/* Both Icons */}

      <Section
        title="With Left and Right Icons"
        description="Use both icon positions when an action benefits from additional visual context."
      >
        <Preview>
          <Button
            leftIcon={<Plus size={18} />}
            rightIcon={<ArrowRight size={18} />}
          >
            Add Customer
          </Button>
        </Preview>

        <CodeBlock>
          {`<Button
              leftIcon={<Plus size={18} />}
              rightIcon={<ArrowRight size={18} />}
            >
              Add Customer
            </Button>`}
        </CodeBlock>
      </Section>

      {/* Disabled */}

      <Section
        title="Disabled"
        description="Disable the button when the action is temporarily unavailable."
      >
        <Preview>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              buttonProps={{
                disabled: true,
              }}
            >
              Disabled
            </Button>

            <Button
              variant="destructive"
              buttonProps={{
                disabled: true,
              }}
            >
              Delete
            </Button>
          </div>
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
        description="Add Tailwind classes to customize the button appearance."
      >
        <Preview>
          <Button
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

      {/* Custom Destructive */}

      <Section
        title="Custom Variant + Icons"
        description="Combine variants, icons, and custom classes."
      >
        <Preview>
          <Button
            variant="destructive"
            leftIcon={<Trash2 size={18} />}
            buttonClassName="
              rounded-full
              px-6
            "
          >
            Delete Customer
          </Button>
        </Preview>

        <CodeBlock>
          {`<Button
              variant="destructive"
              leftIcon={<Trash2 size={18} />}
              buttonClassName="
                rounded-full
                px-6
              "
            >
              Delete Customer
            </Button>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
