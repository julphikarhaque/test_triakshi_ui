import ComponentPage from "@/components/docs/ComponentPage";
import Section from "@/components/docs/Section";
import CodeBlock from "@/components/docs/CodeBlock";

export default function InstallationPage() {
  return (
    <ComponentPage
      title="Installation"
      description="Install Triakshi UI and start using components in your React application."
    >
      <Section
        title="Install the Package"
        description="Install Triakshi UI using your preferred package manager."
      >
        <CodeBlock>{`pnpm add triakshi-ui`}</CodeBlock>

        <p className="text-sm leading-6 text-zinc-600">
          You can also use npm, yarn, or another package manager if your project
          uses a different package management workflow.
        </p>
      </Section>

      <Section
        title="Import a Component"
        description="Import the component you want to use in your application."
      >
        <CodeBlock>{`import { Button } from "triakshi-ui";`}</CodeBlock>
      </Section>

      <Section
        title="Use the Component"
        description="Render the component inside your React application."
      >
        <CodeBlock>
          {`import { Button } from "triakshi-ui";

            export default function Example() {
              return (
                <Button>
                  Get Started
                </Button>
              );
            }`}
        </CodeBlock>
      </Section>

      <Section
        title="Next Steps"
        description="Explore the component documentation."
      >
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm leading-6 text-zinc-600">
            Browse the Components section in the sidebar to learn about
            available props, variants, customization options, and usage
            examples.
          </p>
        </div>
      </Section>
    </ComponentPage>
  );
}
