"use client";

import { useState } from "react";
import MultiSelect from "@/components/formElements/MultiSelect";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

const skills = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "Node.js",
    value: "nodejs",
  },
  {
    label: "MongoDB",
    value: "mongodb",
  },
  {
    label: "Python",
    value: "python",
  },
];

export default function MultiSelectPage() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <ComponentPage
      title="MultiSelect"
      description="A multi-selection component that allows users to choose multiple options from a dropdown."
    >
      <Section
        title="Basic Usage"
        description="Select multiple options from the dropdown."
      >
        <Preview>
          <div className="w-full max-w-md">
            <MultiSelect
              label="Skills"
              options={skills}
              value={selectedSkills}
              onChange={setSelectedSkills}
              placeholder="Select your skills..."
            />
          </div>
        </Preview>

        <CodeBlock>
          {`const [selectedSkills, setSelectedSkills] = useState([]);

<MultiSelect
  label="Skills"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
  placeholder="Select your skills..."
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Multiple Selections"
        description="Selected options are displayed as badges."
      >
        <Preview>
          <div className="w-full max-w-md">
            <MultiSelect
              label="Technologies"
              options={skills}
              value={selectedSkills}
              onChange={setSelectedSkills}
              placeholder="Choose technologies..."
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<MultiSelect
  label="Technologies"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
  placeholder="Choose technologies..."
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the appearance using the component's className props."
      >
        <Preview>
          <div className="w-full max-w-md">
            <MultiSelect
              label="Skills"
              options={skills}
              value={selectedSkills}
              onChange={setSelectedSkills}
              placeholder="Select skills..."
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<MultiSelect
  label="Skills"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
  placeholder="Select skills..."
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
