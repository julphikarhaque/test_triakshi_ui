import ComponentPage from "@/components/docs/ComponentPage";
import Section from "@/components/docs/Section";
import CodeBlock from "@/components/docs/CodeBlock";

export default function UsagePage() {
  return (
    <ComponentPage
      title="Usage"
      description="Learn how to import, configure, and customize Triakshi UI components."
    >
      <Section
        title="Import Components"
        description="Import only the components you need."
      >
        <CodeBlock>
          {`import { Button, Input, Badge } from "triakshi-ui";`}
        </CodeBlock>
      </Section>

      <Section
        title="Basic Example"
        description="Use the imported components directly inside your React component."
      >
        <CodeBlock>
          {`import { Button, Input } from "triakshi-ui";

export default function LoginForm() {
  return (
    <div>
      <Input
        label="Email"
        inputProps={{
          type: "email",
          placeholder: "Enter your email",
        }}
      />

      <Button>
        Sign In
      </Button>
    </div>
  );
}`}
        </CodeBlock>
      </Section>

      <Section
        title="Customize Components"
        description="Use the available customization props to adapt components to your application."
      >
        <CodeBlock>
          {`<Button
  variant="destructive"
  buttonClassName="
    rounded-full
    px-8
  "
>
  Delete
</Button>`}
        </CodeBlock>

        <p className="text-sm leading-6 text-zinc-600">
          Most components expose customization props that allow you to add your
          own Tailwind CSS classes without modifying the component itself.
        </p>
      </Section>

      <Section
        title="Pass Native Props"
        description="Native HTML attributes can be passed through the component's props."
      >
        <CodeBlock>
          {`<Input
  label="Email"
  inputProps={{
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "Enter your email",
  }}
/>`}
        </CodeBlock>
      </Section>

      <Section
        title="Form Example"
        description="Combine multiple Triakshi UI components to create a complete form."
      >
        <CodeBlock>
          {`import {
  Input,
  PasswordInput,
  Button,
} from "triakshi-ui";

export default function LoginForm() {
  return (
    <form>
      <Input
        label="Email"
        inputProps={{
          type: "email",
          placeholder: "Enter your email",
        }}
      />

      <PasswordInput
        label="Password"
        inputProps={{
          placeholder: "Enter your password",
        }}
      />

      <Button>
        Sign In
      </Button>
    </form>
  );
}`}
        </CodeBlock>
      </Section>

      <Section
        title="Explore Components"
        description="Each component has its own documentation page with examples and customization options."
      >
        <div
          className="
            rounded-xl
            border
            border-zinc-200
            bg-white
            p-5
          "
        >
          <p className="text-sm leading-6 text-zinc-600">
            Use the Components section in the sidebar to explore the complete
            Triakshi UI component collection.
          </p>
        </div>
      </Section>
    </ComponentPage>
  );
}
