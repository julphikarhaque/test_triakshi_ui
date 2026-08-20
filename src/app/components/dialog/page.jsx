"use client";

import { useState } from "react";
import Dialog from "@/components/overlaySurfaces/Dialog";

export default function DialogPage() {
  const [open, setOpen] = useState(false);
  const [simpleOpen, setSimpleOpen] = useState(false);

  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-10">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Dialog
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          A modal dialog that displays important information, confirmations,
          forms, or actions without leaving the current page.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Basic Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Use the Dialog component to display content above the current page.
          </p>
        </div>

        {/* Preview */}
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
            Open Dialog
          </button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            title="Delete account"
            description="This action cannot be undone."
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
                    bg-red-600
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-red-700
                  "
                >
                  Delete
                </button>
              </>
            }
          >
            <p className="text-sm leading-6 text-zinc-600">
              Are you sure you want to delete your account? All of your data
              will be permanently removed.
            </p>
          </Dialog>
        </div>
      </section>

      {/* Without Footer */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">
            Without Footer
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Use the Dialog without a footer when no action buttons are required.
          </p>
        </div>

        <div className="flex min-h-72 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8">
          <button
            type="button"
            onClick={() => setSimpleOpen(true)}
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
            Open Simple Dialog
          </button>

          <Dialog
            open={simpleOpen}
            onClose={() => setSimpleOpen(false)}
            title="Welcome to Triakshi UI"
            description="A simple dialog without action buttons."
          >
            <p className="text-sm leading-6 text-zinc-600">
              You can place any React content inside the Dialog component.
              Forms, messages, information, and other UI elements can all be
              displayed here.
            </p>
          </Dialog>
        </div>
      </section>

      {/* Usage */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Usage</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Control the visibility of the dialog using the open state and close
            it with the onClose callback.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
          <pre className="overflow-x-auto p-6 text-sm leading-7 text-zinc-100">
            <code>{`import { useState } from "react";
                    import Dialog from "@/components/overlaySurfaces/Dialog";

                    function Example() {
                    const [open, setOpen] = useState(false);

                    return (
                        <>
                        <button onClick={() => setOpen(true)}>
                            Open Dialog
                        </button>

                        <Dialog
                            open={open}
                            onClose={() => setOpen(false)}
                            title="Example Dialog"
                            description="This is an example dialog."
                        >
                            <p>
                            Your dialog content goes here.
                            </p>
                        </Dialog>
                        </>
                    );
                    }`}</code>
          </pre>
        </div>
      </section>

      {/* Sizes */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Sizes</h2>

          <p className="mt-1 text-sm text-zinc-500">
            Dialog supports four predefined sizes for different types of
            content.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">Small</p>

            <p className="mt-1 text-sm text-zinc-500">
              Use <code>size="sm"</code> for compact dialogs.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">Medium</p>

            <p className="mt-1 text-sm text-zinc-500">
              Use <code>size="md"</code> for standard dialogs.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">Large</p>

            <p className="mt-1 text-sm text-zinc-500">
              Use <code>size="lg"</code> for larger content.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">Extra Large</p>

            <p className="mt-1 text-sm text-zinc-500">
              Use <code>size="xl"</code> for wide dialogs.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
          <pre className="overflow-x-auto p-6 text-sm leading-7 text-zinc-100">
            <code>
              {`<Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    size="lg"
                    title="Large Dialog"
                    >
                    <p>Dialog content</p>
                    </Dialog>
                `}
            </code>
          </pre>
        </div>
      </section>

      {/* API */}
      <section className="mt-12 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">API</h2>

          <p className="mt-1 text-sm text-zinc-500">
            The Dialog component accepts the following props.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-50">
                <tr>
                  <th className="px-5 py-4 font-semibold text-zinc-900">
                    Prop
                  </th>

                  <th className="px-5 py-4 font-semibold text-zinc-900">
                    Type
                  </th>

                  <th className="px-5 py-4 font-semibold text-zinc-900">
                    Default
                  </th>

                  <th className="px-5 py-4 font-semibold text-zinc-900">
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
                    Controls whether the dialog is visible.
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
                    Called when the dialog should be closed.
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
                    Displays the dialog title.
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
                    Optional supporting text displayed below the title.
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
                    Main content displayed inside the dialog.
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
                    Optional content displayed in the footer area.
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
                    size
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    sm | md | lg | xl
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-zinc-600">
                    md
                  </td>

                  <td className="px-5 py-4 text-zinc-600">
                    Controls the maximum width of the dialog.
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
                    Adds custom styles to the dialog container.
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
