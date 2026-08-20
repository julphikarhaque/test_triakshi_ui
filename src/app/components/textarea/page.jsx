"use client";

import Textarea from "@/components/formElements/Textarea";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function TextareaPage() {
  return (
    <ComponentPage
      title="Textarea"
      description="A customizable multiline text field for longer user input."
    >
      <Section
        title="Basic Usage"
        description="Use Textarea when the user needs to enter multiple lines of text."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Message"
              textareaProps={{
                placeholder: "Write your message...",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Message"
  textareaProps={{
    placeholder: "Write your message...",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Helper Text"
        description="Provide additional guidance below the textarea."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Feedback"
              helperText="Tell us what you think about our product."
              textareaProps={{
                placeholder: "Write your feedback...",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Feedback"
  helperText="Tell us what you think about our product."
  textareaProps={{
    placeholder: "Write your feedback...",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Error"
        description="Display an error message when the textarea contains invalid input."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Description"
              error="Description is required."
              textareaProps={{
                placeholder: "Enter a description...",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Description"
  error="Description is required."
  textareaProps={{
    placeholder: "Enter a description...",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Disabled"
        description="Disable the textarea when the field cannot be edited."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Description"
              textareaProps={{
                placeholder: "Disabled textarea",
                disabled: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Description"
  textareaProps={{
    placeholder: "Disabled textarea",
    disabled: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Custom Size"
        description="Control the minimum height and appearance using Tailwind classes."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Message"
              textareaClassName="
                min-h-40
                rounded-2xl
              "
              textareaProps={{
                placeholder: "Write a longer message...",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Message"
  textareaClassName="
    min-h-40
    rounded-2xl
  "
  textareaProps={{
    placeholder: "Write a longer message...",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Character Limit"
        description="Use the native maxLength attribute through textareaProps."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Textarea
              label="Bio"
              helperText="Maximum 200 characters."
              textareaProps={{
                placeholder: "Tell us about yourself...",
                maxLength: 200,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<Textarea
  label="Bio"
  helperText="Maximum 200 characters."
  textareaProps={{
    placeholder: "Tell us about yourself...",
    maxLength: 200,
  }}
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
