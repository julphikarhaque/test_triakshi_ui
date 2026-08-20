"use client";

import { useState } from "react";
import Popover from "@/components/overlaySurfaces/Popover";

export default function PopoverPage() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Popover
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-600">
          An interactive floating surface for displaying contextual content,
          actions, or additional information.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Basic Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Click the trigger to open the Popover. Click outside or press Escape
            to close it.
          </p>
        </div>

        <div className="flex min-h-56 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <Popover
            trigger={
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
                Open Popover
              </button>
            }
          >
            <div className="space-y-3">
              <h3 className="font-semibold text-zinc-900">Account Settings</h3>

              <p className="text-sm leading-6 text-zinc-500">
                Manage your account preferences and settings.
              </p>

              <button
                type="button"
                className="
                  rounded-lg
                  bg-zinc-900
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-white
                "
              >
                Save
              </button>
            </div>
          </Popover>
        </div>
      </section>

      {/* Positions */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Positions</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Control which side of the trigger the Popover appears on.
          </p>
        </div>

        <div className="flex min-h-64 flex-wrap items-center justify-center gap-16 rounded-2xl border border-zinc-200 bg-white p-10">
          {["top", "bottom", "left", "right"].map((position) => (
            <Popover
              key={position}
              side={position}
              trigger={
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
              }
            >
              <p className="text-sm text-zinc-600">Popover from {position}</p>
            </Popover>
          ))}
        </div>
      </section>

      {/* Alignment */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Alignment</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Align the Popover relative to its trigger.
          </p>
        </div>

        <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 rounded-2xl border border-zinc-200 bg-white p-8">
          {["start", "center", "end"].map((alignment) => (
            <Popover
              key={alignment}
              side="bottom"
              align={alignment}
              trigger={
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
                  {alignment}
                </button>
              }
            >
              <p className="text-sm text-zinc-600">
                {alignment} aligned Popover
              </p>
            </Popover>
          ))}
        </div>
      </section>

      {/* Controlled */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Controlled</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Control the Popover state externally using open and onOpenChange.
          </p>
        </div>

        <div className="flex min-h-56 flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8">
          <button
            type="button"
            onClick={() => setControlledOpen(!controlledOpen)}
            className="
              rounded-xl
              bg-zinc-900
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
            "
          >
            {controlledOpen ? "Close Popover" : "Open Popover"}
          </button>

          <Popover
            open={controlledOpen}
            onOpenChange={setControlledOpen}
            trigger={
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-zinc-300
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-zinc-700
                "
              >
                Controlled Trigger
              </button>
            }
          >
            <div className="space-y-3">
              <p className="text-sm text-zinc-600">
                This Popover is controlled by external state.
              </p>

              <button
                type="button"
                onClick={() => setControlledOpen(false)}
                className="
                  rounded-lg
                  bg-zinc-900
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-white
                "
              >
                Close
              </button>
            </div>
          </Popover>
        </div>
      </section>

      {/* Disabled */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Disabled</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Prevent the Popover from opening when disabled.
          </p>
        </div>

        <div className="flex min-h-40 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <Popover
            disabled
            trigger={
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
                Disabled
              </button>
            }
          >
            <p className="text-sm text-zinc-600">This should not appear.</p>
          </Popover>
        </div>
      </section>

      {/* Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Import Popover and provide a trigger and interactive content.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
          <pre className="overflow-x-auto p-6 text-sm leading-6 text-zinc-200">
            <code>
              {`import Popover from "@/components/overlaySurfaces/Popover";

                    export default function Example() {
                      return (
                        <Popover
                          trigger={
                            <button>
                              Open
                            </button>
                          }
                        >
                          <div>
                            Popover content
                          </div>
                        </Popover>
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
            Props available on the Popover component.
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
                    trigger
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    ReactNode
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Element that opens and closes the Popover.
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
                    Interactive content displayed inside the Popover.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    open
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    boolean
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls the Popover visibility externally.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    onOpenChange
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    function
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Called whenever the Popover open state changes.
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
                    bottom
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls which side the Popover appears on.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    align
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    string
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    center
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls the alignment relative to the trigger.
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
                    Prevents the Popover from opening.
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
                    Adds custom styling to the Popover panel.
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
