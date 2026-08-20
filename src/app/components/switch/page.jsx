"use client";

import Switch from "@/components/formElements/Switch";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      description="A toggle control for enabling or disabling a setting."
    >
      <Section
        title="Basic Usage"
        description="Use a switch when the user needs to turn a setting on or off."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Switch label="Notifications" />
          </div>
        </Preview>

        <CodeBlock>
          {`<Switch
  label="Notifications"
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Helper Text"
        description="Provide additional information about what the setting controls."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Switch
              label="Email Notifications"
              helperText="Receive important updates by email."
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Switch
  label="Email Notifications"
  helperText="Receive important updates by email."
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Default On"
        description="Use defaultChecked when the switch should initially be enabled."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Switch
              label="Auto Save"
              inputProps={{
                defaultChecked: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Switch
  label="Auto Save"
  inputProps={{
    defaultChecked: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Disabled"
        description="Disable the switch when the setting cannot be changed."
      >
        <Preview>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Switch label="Available" />

            <Switch
              label="Disabled"
              inputProps={{
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Switch
  label="Disabled"
  inputProps={{
    disabled: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the switch appearance with Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Switch
              label="Custom Switch"
              switchClassName="
                scale-110
              "
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Switch
  label="Custom Switch"
  switchClassName="
    scale-110
  "
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
