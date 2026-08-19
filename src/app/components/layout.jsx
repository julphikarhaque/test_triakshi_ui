import Link from "next/link";

const navigation = [
  {
    title: "Form Elements",
    items: [
      { label: "Input", href: "/components/input" },
      { label: "Password Input", href: "/components/password-input" },
      { label: "Phone Input", href: "/components/phone-input" },
      { label: "Select", href: "/components/select" },
      { label: "MultiSelect", href: "/components/multi-select" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Radio", href: "/components/radio" },
      { label: "Switch", href: "/components/switch" },
      { label: "Textarea", href: "/components/textarea" },
      { label: "File Upload", href: "/components/file-upload" },
    ],
  },
  {
    title: "Actions",
    items: [{ label: "Button", href: "/components/button" }],
  },
  {
    title: "Data Display",
    items: [
      { label: "Avatar", href: "/components/avatar" },
      { label: "Badge", href: "/components/badge" },
      { label: "Card", href: "/components/card" },
    ],
  },
  {
    title: "Feedback",
    items: [{ label: "Skeleton", href: "/components/skeleton" }],
  },
  {
    title: "Overlay",
    items: [{ label: "Tooltip", href: "/components/tooltip" }],
  },
];

export default function ComponentsLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="text-lg font-bold text-zinc-950">
            Triakshi UI
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-zinc-200 bg-white px-5 py-8 lg:block">
          <nav className="space-y-8">
            {navigation.map((group) => (
              <div key={group.title}>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {group.title}
                </h2>

                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        block
                        rounded-lg
                        px-3
                        py-2
                        text-sm
                        text-zinc-600
                        transition
                        hover:bg-zinc-100
                        hover:text-zinc-950
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
