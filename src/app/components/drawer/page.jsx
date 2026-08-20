"use client";

import { useState } from "react";
import Drawer from "@/components/overlaySurfaces/Drawer";

export default function DrawerPage() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState("right");

  return (
    <main className="mx-auto max-w-5xl px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Drawer
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-600">
          A panel that slides in from the edge of the screen and is useful for
          forms, navigation, settings, and additional content.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Basic Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Open a Drawer from the right side of the screen.
          </p>
        </div>

        <div className="flex min-h-72 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
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
            Open Drawer
          </button>

          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            title="Account Settings"
            description="Manage your account preferences."
            side={side}
            footer={
              <>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-xl
                    border
                    border-zinc-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-zinc-700
                    transition
                    hover:bg-zinc-100
                  "
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-xl
                    bg-zinc-900
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-zinc-800
                  "
                >
                  Save Changes
                </button>
              </>
            }
          >
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-zinc-300
                    px-4
                    text-sm
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-zinc-300
                    px-4
                    text-sm
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>
            </div>
          </Drawer>
        </div>
      </section>
      {/* Positions */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Positions</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Drawer can open from any side of the screen.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-white p-8">
          {["right", "left", "top", "bottom"].map((position) => (
            <button
              key={position}
              type="button"
              onClick={() => {
                setSide(position);
                setOpen(true);
              }}
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
              Open from {position}
            </button>
          ))}
        </div>
      </section>
      {/* Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Import the Drawer component and control its visibility with state.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
          <pre className="overflow-x-auto p-6 text-sm leading-6 text-zinc-200">
            <code>
              {`import { useState } from "react";
                    import Drawer from "@/components/overlaySurfaces/Drawer";

                    export default function Example() {
                    const [open, setOpen] = useState(false);

                    return (
                        <>
                        <button onClick={() => setOpen(true)}>
                            Open Drawer
                        </button>

                        <Drawer
                            open={open}
                            onClose={() => setOpen(false)}
                            title="Account Settings"
                            description="Manage your account preferences."
                            side="right"
                        >
                            <p>
                            Your drawer content goes here.
                            </p>
                        </Drawer>
                        </>
                    );
                  }`}{" "}
            </code>
          </pre>
        </div>
      </section>
      {/* API Reference */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">API Reference</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Props available on the Drawer component.
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
                    open
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    boolean
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    false
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls whether the Drawer is visible.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    onClose
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    function
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Called when the Drawer should close.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    title
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    string
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Displays the Drawer title.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    description
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    string
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Optional description displayed below the title.
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
                    Main content displayed inside the Drawer.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    footer
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    ReactNode
                  </td>

                  <td className="px-5 py-4 text-zinc-600">—</td>

                  <td className="px-5 py-4 text-zinc-600">
                    Optional footer content, such as action buttons.
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono text-xs text-zinc-900">
                    showClose
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    boolean
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    true
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls whether the close button is displayed.
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
                    right
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls which side the Drawer opens from.
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
                    Adds custom styling to the Drawer panel.
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
