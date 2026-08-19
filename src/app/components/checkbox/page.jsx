"use client";

import Checkbox from "@/components/formElements/Checkbox";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function CheckboxPage() {
  return (
    <ComponentPage
      title="Checkbox"
      description="A customizable checkbox component for selecting one or more options."
    >
      <Section
        title="Basic Usage"
        description="Use a checkbox when the user needs to accept or select an option."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox label="Accept terms and conditions" />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Accept terms and conditions"
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Helper Text"
        description="Provide additional information below the checkbox label."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox
              label="Accept terms"
              helperText="You agree to our terms and conditions."
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Accept terms"
  helperText="You agree to our terms and conditions."
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Error"
        description="Display an error when the checkbox requires user action."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox label="Accept terms" error="You must accept the terms." />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Accept terms"
  error="You must accept the terms."
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Default Checked"
        description="Use defaultChecked when the checkbox should initially be selected."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox
              label="Enable notifications"
              inputProps={{
                defaultChecked: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Enable notifications"
  inputProps={{
    defaultChecked: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Disabled"
        description="Disable the checkbox when the option cannot be changed."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox
              label="Disabled option"
              inputProps={{
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Disabled option"
  inputProps={{
    disabled: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the checkbox appearance with Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Checkbox
              label="Custom checkbox"
              checkboxClassName="
                rounded-full
                border-blue-500
              "
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Checkbox
  label="Custom checkbox"
  checkboxClassName="
    rounded-full
    border-blue-500
  "
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
