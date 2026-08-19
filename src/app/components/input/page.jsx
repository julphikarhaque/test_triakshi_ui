"use client";

import Input from "@/components/formElements/input";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";
import { Mail, User } from "lucide-react";

export default function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="A flexible text input with labels, icons, helper text, errors, and custom styling."
    >
      {/* Basic Usage */}

      <Section
        title="Basic Usage"
        description="The simplest way to use the Input component."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Name"
              inputProps={{
                placeholder: "Enter your name",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  label="Name"
  inputProps={{
    placeholder: "Enter your name",
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* With Icon */}

      <Section
        title="With Icon"
        description="Add an icon to provide visual context for the input."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Username"
              leftIcon={<User size={20} />}
              inputProps={{
                placeholder: "Enter username",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`import { User } from "lucide-react";

<Input
  label="Username"
  leftIcon={<User size={20} />}
  inputProps={{
    placeholder: "Enter username",
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* Email */}

      <Section
        title="Email Input"
        description="The same component can be used for email fields."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              type="email"
              label="Email"
              leftIcon={<Mail size={20} />}
              inputProps={{
                placeholder: "Enter your email",
                autoComplete: "email",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  type="email"
  label="Email"
  leftIcon={<Mail size={20} />}
  inputProps={{
    placeholder: "Enter your email",
    autoComplete: "email",
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* Helper Text */}

      <Section
        title="Helper Text"
        description="Use helper text to provide additional information."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Username"
              helperText="Username must be at least 3 characters."
              inputProps={{
                placeholder: "Enter username",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  label="Username"
  helperText="Username must be at least 3 characters."
  inputProps={{
    placeholder: "Enter username",
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* Error */}

      <Section
        title="Error"
        description="Display an error message when the input is invalid."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Email"
              error="Please enter a valid email address."
              inputProps={{
                placeholder: "Enter your email",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  label="Email"
  error="Please enter a valid email address."
  inputProps={{
    placeholder: "Enter your email",
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* Disabled */}

      <Section
        title="Disabled"
        description="Disable the input when the field should not be edited."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Username"
              inputProps={{
                placeholder: "Disabled input",
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  label="Username"
  inputProps={{
    placeholder: "Disabled input",
    disabled: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      {/* Customization */}

      <Section
        title="Customization"
        description="Customize the input appearance with Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Input
              label="Custom Input"
              inputClassName="
                rounded-full
                border-blue-500
                px-5
              "
              inputProps={{
                placeholder: "Custom styled input",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Input
  label="Custom Input"
  inputClassName="
    rounded-full
    border-blue-500
    px-5
  "
  inputProps={{
    placeholder: "Custom styled input",
  }}
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
