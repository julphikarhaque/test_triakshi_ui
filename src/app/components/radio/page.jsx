"use client";

import Radio from "@/components/formElements/Radio";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function RadioPage() {
  return (
    <ComponentPage
      title="Radio"
      description="A customizable radio component for selecting one option from a group."
    >
      <Section
        title="Basic Usage"
        description="Use the same name for related radio buttons so only one option can be selected."
      >
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Radio
              label="React"
              inputProps={{
                name: "technology",
                value: "react",
              }}
            />

            <Radio
              label="Next.js"
              inputProps={{
                name: "technology",
                value: "nextjs",
              }}
            />

            <Radio
              label="Vue"
              inputProps={{
                name: "technology",
                value: "vue",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="React"
              inputProps={{
                name: "technology",
                value: "react",
              }}
            />

            <Radio
              label="Next.js"
              inputProps={{
                name: "technology",
                value: "nextjs",
              }}
            />

            <Radio
              label="Vue"
              inputProps={{
                name: "technology",
                value: "vue",
              }}
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Default Selected"
        description="Use defaultChecked to select an option initially."
      >
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Radio
              label="React"
              inputProps={{
                name: "framework",
                value: "react",
                defaultChecked: true,
              }}
            />

            <Radio
              label="Next.js"
              inputProps={{
                name: "framework",
                value: "nextjs",
              }}
            />

            <Radio
              label="Vue"
              inputProps={{
                name: "framework",
                value: "vue",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="React"
              inputProps={{
                name: "framework",
                value: "react",
                defaultChecked: true,
              }}
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Helper Text"
        description="Provide additional information for the selected option."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Radio
              label="Email"
              helperText="Receive notifications through email."
              inputProps={{
                name: "notification",
                value: "email",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="Email"
              helperText="Receive notifications through email."
              inputProps={{
                name: "notification",
                value: "email",
              }}
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Error"
        description="Display an error message when the selection requires attention."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Radio
              label="Accept terms"
              error="Please select this option to continue."
              inputProps={{
                name: "terms",
                value: "accept",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="Accept terms"
              error="Please select this option to continue."
              inputProps={{
                name: "terms",
                value: "accept",
              }}
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Disabled"
        description="Disable a radio option when it cannot be selected."
      >
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Radio
              label="Available option"
              inputProps={{
                name: "plan",
                value: "basic",
              }}
            />

            <Radio
              label="Unavailable option"
              inputProps={{
                name: "plan",
                value: "premium",
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="Unavailable option"
              inputProps={{
                name: "plan",
                value: "premium",
                disabled: true,
              }}
            />`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the radio appearance using Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Radio
              label="Custom radio"
              radioClassName="
                border-blue-500
                rounded-md
              "
              inputProps={{
                name: "custom",
                value: "custom",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Radio
              label="Custom radio"
              radioClassName="
                border-blue-500
                rounded-md
              "
              inputProps={{
                name: "custom",
                value: "custom",
              }}
            />`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
