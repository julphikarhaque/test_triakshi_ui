"use client";

import PasswordInput from "@/components/formElements/PasswordInput";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function PasswordInputPage() {
  return (
    <ComponentPage
      title="Password Input"
      description="A password field with built-in password visibility controls and support for common input customization."
    >
      {/* Basic Usage */}

      <Section
        title="Basic Usage"
        description="Use PasswordInput when the user needs to enter a password."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PasswordInput
              label="Password"
              inputProps={{
                placeholder: "Enter your password",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PasswordInput
              label="Password"
              inputProps={{
                placeholder: "Enter your password",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Helper Text */}

      <Section
        title="Helper Text"
        description="Provide additional information below the password field."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PasswordInput
              label="Password"
              helperText="Password must contain at least 8 characters."
              inputProps={{
                placeholder: "Enter your password",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PasswordInput
              label="Password"
              helperText="Password must contain at least 8 characters."
              inputProps={{
                placeholder: "Enter your password",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Error */}

      <Section
        title="Error"
        description="Display an error message when the password is invalid."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PasswordInput
              label="Password"
              error="Password is incorrect."
              inputProps={{
                placeholder: "Enter your password",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PasswordInput
              label="Password"
              error="Password is incorrect."
              inputProps={{
                placeholder: "Enter your password",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Disabled */}

      <Section
        title="Disabled"
        description="Disable the password field when it should not be editable."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PasswordInput
              label="Password"
              inputProps={{
                placeholder: "Password",
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PasswordInput
              label="Password"
              inputProps={{
                placeholder: "Password",
                disabled: true,
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Customization */}

      <Section
        title="Customization"
        description="Customize the input appearance using Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PasswordInput
              label="Password"
              inputClassName="
                  rounded-full
                  border-blue-500
                  bg-zinc-50
                "
              inputProps={{
                placeholder: "Custom password input",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PasswordInput
              label="Password"
              inputClassName="
                rounded-full
                border-blue-500
                bg-zinc-50
              "
              inputProps={{
                placeholder: "Custom password input",
              }}
            />`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
