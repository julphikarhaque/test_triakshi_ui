"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const gettingStarted = [
  {
    name: "Introduction",
    href: "/docs",
  },
  {
    name: "Installation",
    href: "/docs/installation",
  },
  {
    name: "Usage",
    href: "/docs/usage",
  },
];

const components = [
  {
    name: "Dialog",
    href: "/components/dialog",
  },
  {
    name: "Drawer",
    href: "/components/drawer",
  },
  {
    name: "Tooltip",
    href: "/components/tooltip",
  },
  {
    name: "Popover",
    href: "/components/popover",
  },
  {
    name: "Button",
    href: "/components/button",
  },
  {
    name: "Input",
    href: "/components/input",
  },
  {
    name: "Password Input",
    href: "/components/password-input",
  },
  {
    name: "Phone Input",
    href: "/components/phone-input",
  },
  {
    name: "Select",
    href: "/components/select",
  },
  {
    name: "MultiSelect",
    href: "/components/multi-select",
  },
  {
    name: "Checkbox",
    href: "/components/checkbox",
  },
  {
    name: "Radio",
    href: "/components/radio",
  },
  {
    name: "Switch",
    href: "/components/switch",
  },
  {
    name: "Textarea",
    href: "/components/textarea",
  },
  {
    name: "File Upload",
    href: "/components/file-upload",
  },
  {
    name: "Avatar",
    href: "/components/avatar",
  },
  {
    name: "Badge",
    href: "/components/badge",
  },
  {
    name: "Card",
    href: "/components/card",
  },
  {
    name: "Skeleton",
    href: "/components/skeleton",
  },
  {
    name: "Skeleton Card",
    href: "/components/skeleton-card",
  },
];

function DocsSidebar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/docs") {
      return pathname === "/docs";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed bottom-0 left-0 top-16 w-64 border-r border-zinc-200 bg-white">
      <div className="flex h-full flex-col">
        <div className="border-b border-zinc-200 px-6 py-5">
          <Link href="/" className="text-lg font-bold text-zinc-900">
            Triakshi UI
          </Link>

          <p className="mt-1 text-xs text-zinc-500">Component Library</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {/* Getting Started */}
          <div className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Getting Started
            </p>

            <div className="space-y-1">
              {gettingStarted.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    transition
                    ${
                      isActive(item.href)
                        ? "bg-zinc-900 font-medium text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Components */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Components
            </p>

            <div className="space-y-1">
              {components.map((component) => (
                <Link
                  key={component.href}
                  href={component.href}
                  className={`
                    block
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    transition
                    ${
                      isActive(component.href)
                        ? "bg-zinc-900 font-medium text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }
                  `}
                >
                  {component.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default DocsSidebar;
