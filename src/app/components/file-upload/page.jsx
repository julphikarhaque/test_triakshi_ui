"use client";

import FileUpload from "@/components/formElements/FileUpload";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function FileUploadPage() {
  return (
    <ComponentPage
      title="File Upload"
      description="A customizable file upload component for selecting documents and other files."
    >
      <Section
        title="Basic Usage"
        description="Allow users to select a file from their device."
      >
        <Preview>
          <div className="w-full max-w-md">
            <FileUpload label="Upload File" />
          </div>
        </Preview>

        <CodeBlock>
          {`<FileUpload
  label="Upload File"
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Multiple Files"
        description="Allow users to select multiple files at once."
      >
        <Preview>
          <div className="w-full max-w-md">
            <FileUpload
              label="Documents"
              inputProps={{
                multiple: true,
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<FileUpload
  label="Documents"
  inputProps={{
    multiple: true,
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Accepted File Types"
        description="Restrict the types of files users can select."
      >
        <Preview>
          <div className="w-full max-w-md">
            <FileUpload
              label="Documents"
              inputProps={{
                accept: ".pdf,.doc,.docx",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<FileUpload
  label="Documents"
  inputProps={{
    accept: ".pdf,.doc,.docx",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Multiple Files and File Types"
        description="Combine multiple file selection with accepted file types."
      >
        <Preview>
          <div className="w-full max-w-md">
            <FileUpload
              label="Documents"
              inputProps={{
                multiple: true,
                accept: ".pdf,.doc,.docx",
              }}
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<FileUpload
  label="Documents"
  inputProps={{
    multiple: true,
    accept: ".pdf,.doc,.docx",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Customization"
        description="Customize the upload area using the component's class name prop."
      >
        <Preview>
          <div className="w-full max-w-md">
            <FileUpload
              label="Upload Resume"
              uploadClassName="
                min-h-40
                rounded-2xl
              "
            />
          </div>
        </Preview>

        <CodeBlock>
          {`<FileUpload
  label="Upload Resume"
  uploadClassName="
    min-h-40
    rounded-2xl
  "
/>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
