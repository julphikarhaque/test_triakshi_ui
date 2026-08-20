"use client";

import Card from "@/components/Card";
import ComponentPage from "@/components/docs/ComponentPage";
import Preview from "@/components/docs/Preview";
import CodeBlock from "@/components/docs/CodeBlock";
import Section from "@/components/docs/Section";

export default function CardPage() {
  return (
    <ComponentPage
      title="Card"
      description="A flexible surface component for grouping related content and actions."
    >
      <Section
        title="Basic Usage"
        description="Use a card to group related content into a distinct surface."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Card>
              <h3 className="text-lg font-semibold text-zinc-900">
                Customer Overview
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                View customer information, activity, and recent interactions.
              </p>
            </Card>
          </div>
        </Preview>

        <CodeBlock>
          {`<Card>
              <h3 className="text-lg font-semibold text-zinc-900">
                Customer Overview
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                View customer information, activity, and recent interactions.
              </p>
            </Card>`}
        </CodeBlock>
      </Section>

      <Section
        title="Card with Actions"
        description="Cards can contain content together with actions."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Card>
              <h3 className="text-lg font-semibold text-zinc-900">AI Agent</h3>

              <p className="mt-2 text-sm text-zinc-500">
                Your customer support agent is ready to receive calls.
              </p>

              <div className="mt-5 flex gap-3">
                <button
                  className="
                    rounded-lg
                    bg-zinc-900
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  Configure
                </button>

                <button
                  className="
                    rounded-lg
                    border
                    border-zinc-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-zinc-700
                  "
                >
                  View
                </button>
              </div>
            </Card>
          </div>
        </Preview>

        <CodeBlock>
          {`<Card>
              <h3 className="text-lg font-semibold text-zinc-900">
                AI Agent
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Your customer support agent is ready to receive calls.
              </p>

              <div className="mt-5 flex gap-3">
                <button>
                  Configure
                </button>

                <button>
                  View
                </button>
              </div>
            </Card>`}
        </CodeBlock>
      </Section>

      <Section
        title="Custom Content"
        description="Card is a surface component, so you can place any React content inside it."
      >
        <Preview>
          <div className="w-full max-w-md">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Total Customers</p>

                  <p className="mt-1 text-3xl font-bold text-zinc-900">2,480</p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-sm
                    font-semibold
                    text-blue-600
                  "
                >
                  +18%
                </div>
              </div>
            </Card>
          </div>
        </Preview>

        <CodeBlock>
          {`<Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">
                    Total Customers
                  </p>

                  <p className="mt-1 text-3xl font-bold text-zinc-900">
                    2,480
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 px-3 py-2">
                  +18%
                </div>
              </div>
            </Card>`}
        </CodeBlock>
      </Section>
    </ComponentPage>
  );
}
