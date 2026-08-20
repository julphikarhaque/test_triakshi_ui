import ComponentPage from "@/components/docs/ComponentPage";
import Section from "@/components/docs/Section";

export default function DocsPage() {
  return (
    <ComponentPage
      title="Introduction"
      description="Triakshi UI is a reusable React component library built for modern web applications."
    >
      <Section
        title="What is Triakshi UI?"
        description="A collection of reusable and customizable UI components."
      >
        <div className="space-y-4 text-sm leading-7 text-zinc-600">
          <p>
            Triakshi UI provides reusable React components that help you build
            consistent interfaces faster.
          </p>

          <p>
            Components are designed to be simple to use while still allowing
            developers to customize their appearance and behavior.
          </p>
        </div>
      </Section>

      <Section
        title="Why Triakshi UI?"
        description="Built with flexibility and developer experience in mind."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">Reusable</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Build interfaces using components that can be reused across your
              application.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">Customizable</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Customize components using familiar Tailwind CSS classes.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">Accessible</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Components are designed with standard HTML behavior and
              accessibility in mind.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Components"
        description="Explore the available components."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Button",
            "Input",
            "Password Input",
            "Phone Input",
            "Select",
            "MultiSelect",
            "Checkbox",
            "Radio",
            "Switch",
            "Textarea",
            "File Upload",
            "Avatar",
            "Badge",
            "Card",
            "Skeleton",
            "Skeleton Card",
          ].map((component) => (
            <div
              key={component}
              className="
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-4
                py-3
                text-sm
                font-medium
                text-zinc-700
              "
            >
              {component}
            </div>
          ))}
        </div>
      </Section>
    </ComponentPage>
  );
}
