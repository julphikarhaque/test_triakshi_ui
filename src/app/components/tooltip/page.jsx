"use client";

import Tooltip from "@/components/overlaySurfaces/Tooltip";

export default function TooltipPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Tooltip
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-600">
          A small contextual message that appears when a user hovers over or
          focuses an element.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Basic Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Wrap any element with Tooltip and provide the content you want to
            display.
          </p>
        </div>

        <div className="flex min-h-48 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <Tooltip content="Edit this item">
            <button
              type="button"
              className="
                rounded-xl
                bg-zinc-900
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-zinc-800
              "
            >
              Hover me
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Positions */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Positions</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Control where the tooltip appears relative to its trigger.
          </p>
        </div>

        <div className="flex min-h-56 flex-wrap items-center justify-center gap-8 rounded-2xl border border-zinc-200 bg-white p-8">
          {["top", "bottom", "left", "right"].map((position) => (
            <Tooltip
              key={position}
              content={`Tooltip from ${position}`}
              side={position}
            >
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-zinc-300
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  capitalize
                  text-zinc-700
                  transition
                  hover:bg-zinc-100
                "
              >
                {position}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* Delay */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Delay</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Control how long the user must hover before the tooltip appears.
          </p>
        </div>

        <div className="flex min-h-40 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <Tooltip content="This tooltip appears after one second" delay={1000}>
            <button
              type="button"
              className="
                rounded-xl
                border
                border-zinc-300
                px-5
                py-2.5
                text-sm
                font-medium
                text-zinc-700
                transition
                hover:bg-zinc-100
              "
            >
              Delayed Tooltip
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Disabled */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Disabled</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Disable the tooltip when contextual information is not required.
          </p>
        </div>

        <div className="flex min-h-40 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <Tooltip content="You should not see this tooltip" disabled>
            <button
              type="button"
              className="
                rounded-xl
                bg-zinc-100
                px-5
                py-2.5
                text-sm
                font-medium
                text-zinc-400
              "
            >
              Disabled Tooltip
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Import Tooltip and wrap the element that needs contextual
            information.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
          <pre className="overflow-x-auto p-6 text-sm leading-6 text-zinc-200">
            <code>
              {`import Tooltip from "@/components/overlaySurfaces/Tooltip";

                    export default function Example() {
                      return (
                        <Tooltip content="Edit this item">
                          <button>
                            Edit
                          </button>
                        </Tooltip>
                      );
                    }`}
            </code>
          </pre>
        </div>
      </section>

      {/* API Reference */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">API Reference</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Props available on the Tooltip component.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50">
                <tr>
                  <th className="px-5 py-3 font-semibold text-zinc-900">
                    Prop
                  </th>

                  <th className="px-5 py-3 font-semibold text-zinc-900">
                    Type
                  </th>

                  <th className="px-5 py-3 font-semibold text-zinc-900">
                    Default
                  </th>

                  <th className="px-5 py-3 font-semibold text-zinc-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    content
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    ReactNode
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Content displayed inside the tooltip.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    children
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    ReactNode
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Element that triggers the tooltip.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    side
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    string
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    top
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls the tooltip position.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    disabled
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    boolean
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    false
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Prevents the tooltip from appearing.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    delay
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    number
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    200
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Delay in milliseconds before showing the tooltip.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    className
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    string
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Adds custom styling to the tooltip.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
