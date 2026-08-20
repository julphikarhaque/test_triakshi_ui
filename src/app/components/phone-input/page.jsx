"use client";

import PhoneInput from "@/components/formElements/PhoneInput";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function PhoneInputPage() {
  return (
    <ComponentPage
      title="Phone Input"
      description="A phone number input with country selection, numeric validation, and customizable field styling."
    >
      {/* Basic Usage */}

      <Section
        title="Basic Usage"
        description="The phone input includes a country selector and phone number field."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PhoneInput
              label="Phone Number"
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PhoneInput
              label="Phone Number"
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Country Selection */}

      <Section
        title="Country Selection"
        description="Users can select their country directly from the country selector."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PhoneInput
              label="Phone Number"
              defaultCountry="US"
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PhoneInput
              label="Phone Number"
              defaultCountry="US"
              inputProps={{
                placeholder: "Enter your phone number",
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
            <PhoneInput
              label="Phone Number"
              helperText="Enter a valid phone number."
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PhoneInput
              label="Phone Number"
              helperText="Enter a valid phone number."
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Error */}

      <Section
        title="Error"
        description="Display an error message when the phone number is invalid."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PhoneInput
              label="Phone Number"
              error="Please enter a valid phone number."
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PhoneInput
              label="Phone Number"
              error="Please enter a valid phone number."
              inputProps={{
                placeholder: "Enter your phone number",
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Customization */}

      <Section
        title="Customization"
        description="Customize the phone number field using Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <PhoneInput
              label="Phone Number"
              inputClassName="
                  text-zinc-200
                  placeholder:text-zinc-500
                "
              inputProps={{
                placeholder: "Custom phone input",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<PhoneInput
              label="Phone Number"
              inputClassName="
                text-zinc-200
                placeholder:text-zinc-500
              "
              inputProps={{
                placeholder: "Custom phone input",
              }}
            />`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
