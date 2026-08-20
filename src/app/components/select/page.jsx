"use client";

import SelectInput from "@/components/formElements/SelectInput";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

const countries = [
  {
    label: "Choose Country",
    value: "",
  },
  {
    label: "India",
    value: "india",
  },
  {
    label: "United States",
    value: "usa",
  },
  {
    label: "United Kingdom",
    value: "uk",
  },
  {
    label: "Australia",
    value: "australia",
  },
];

export default function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      description="A customizable select field for choosing one option from a list."
    >
      {/* Basic Usage */}

      <Section
        title="Basic Usage"
        description="Use SelectInput when the user needs to choose one option."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SelectInput label="Country" options={countries} />
          </div>
        </Preview>

        <CodeBlock>
          {`const countries = [
            {
              label: "Choose Country",
              value: "",
            },
            {
              label: "India",
              value: "india",
            },
            {
              label: "United States",
              value: "usa",
            },
          ];

          <SelectInput
            label="Country"
            options={countries}
          />`}
        </CodeBlock>
      </Section>

      {/* Helper Text */}

      <Section
        title="Helper Text"
        description="Provide additional information below the select field."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SelectInput
              label="Country"
              helperText="Select the country where you live."
              options={countries}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<SelectInput
              label="Country"
              helperText="Select the country where you live."
              options={countries}
            />`}
        </CodeBlock>
      </Section>

      {/* Error */}

      <Section
        title="Error"
        description="Display an error message when the selection is invalid."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SelectInput
              label="Country"
              error="Please select a country."
              options={countries}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<SelectInput
              label="Country"
              error="Please select a country."
              options={countries}
            />`}
        </CodeBlock>
      </Section>

      {/* Disabled */}

      <Section
        title="Disabled"
        description="Disable the select when the user should not be able to change it."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SelectInput
              label="Country"
              options={countries}
              inputProps={{
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<SelectInput
              label="Country"
              options={countries}
              inputProps={{
                disabled: true,
              }}
            />`}
        </CodeBlock>
      </Section>

      {/* Customization */}

      <Section
        title="Customization"
        description="Customize the select field with Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <SelectInput
              label="Country"
              options={countries}
              selectClassName="
                rounded-full
                border-blue-500
              "
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<SelectInput
              label="Country"
              options={countries}
              selectClassName="
                rounded-full
                border-blue-500
              "
            />`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
