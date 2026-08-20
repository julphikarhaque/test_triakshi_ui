"use client";

import Link from "next/link";

const featuredComponents = [
  {
    name: "Button",
    description: "Flexible buttons for actions, forms, and navigation.",
    href: "/components/button",
  },
  {
    name: "Input",
    description: "Clean and reusable inputs for modern forms.",
    href: "/components/input",
  },
  {
    name: "Select",
    description: "Simple selection controls with a consistent design.",
    href: "/components/select",
  },
  {
    name: "Card",
    description: "Flexible surfaces for organizing application content.",
    href: "/components/card",
  },
  {
    name: "Dialog",
    description: "Focused interfaces for confirmations and interactions.",
    href: "/components/dialog",
  },
  {
    name: "Popover",
    description: "Contextual floating surfaces for additional content.",
    href: "/components/popover",
  },
];

const stats = [
  {
    value: "20+",
    label: "Components",
  },
  {
    value: "100%",
    label: "Customizable",
  },
  {
    value: "React",
    label: "Built for",
  },
  {
    value: "Tailwind",
    label: "Styled with",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white">
              T
            </div>

            <span className="text-base font-bold tracking-tight">
              Triakshi UI
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/docs"
              className="text-sm text-zinc-600 transition hover:text-zinc-950"
            >
              Docs
            </Link>

            <Link
              href="/components/button"
              className="text-sm text-zinc-600 transition hover:text-zinc-950"
            >
              Components
            </Link>

            <a
              href="#features"
              className="text-sm text-zinc-600 transition hover:text-zinc-950"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm text-zinc-600 transition hover:text-zinc-950"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/docs"
              className="
                hidden
                rounded-lg
                px-3
                py-2
                text-sm
                font-medium
                text-zinc-600
                transition
                hover:bg-zinc-100
                hover:text-zinc-900
                sm:block
              "
            >
              Documentation
            </Link>

            <Link
              href="/components/button"
              className="
                rounded-lg
                bg-zinc-900
                px-4
                py-2
                text-sm
                font-medium
                text-white
                shadow-sm
                transition
                hover:bg-zinc-800
              "
            >
              Explore Components
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-zinc-100/70 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-28 text-center sm:pt-36">
          <div
            className="
              mx-auto
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-zinc-200
              bg-white
              px-3
              py-1.5
              text-xs
              font-medium
              text-zinc-600
              shadow-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open source React component library
            <span className="text-zinc-400">→</span>
          </div>

          <h1
            className="
              mx-auto
              max-w-4xl
              text-5xl
              font-bold
              tracking-[-0.04em]
              text-zinc-950
              sm:text-6xl
              lg:text-7xl
            "
          >
            Build beautiful interfaces
            <span className="block text-zinc-400">
              without starting from scratch.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
            "
          >
            Triakshi UI is a collection of clean, accessible, and customizable
            React components designed to help you build modern products faster.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                rounded-xl
                bg-zinc-900
                px-6
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-zinc-900/10
                transition
                hover:bg-zinc-800
              "
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/components/button"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-6
                text-sm
                font-semibold
                text-zinc-700
                shadow-sm
                transition
                hover:bg-zinc-50
              "
            >
              Browse Components
            </Link>
          </div>

          <p className="mt-5 text-xs text-zinc-400">
            Built with React · Tailwind CSS · Designed for developers
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-zinc-200 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-2xl font-bold tracking-tight text-zinc-950">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-zinc-500">WHY TRIAKSHI UI</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Everything you need to build faster.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Focus on your product instead of repeatedly building the same
            interface patterns.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <FeatureCard
            number="01"
            title="Reusable"
            description="Build your interface from reusable components instead of repeating the same UI code across your application."
          />

          <FeatureCard
            number="02"
            title="Customizable"
            description="Every component is designed to be easily adapted to your application's design system and requirements."
          />

          <FeatureCard
            number="03"
            title="Developer focused"
            description="Simple APIs, predictable behavior, and clear documentation make the library easy to understand and use."
          />
        </div>
      </section>

      {/* Components */}
      <section
        id="components"
        className="border-y border-zinc-200 bg-zinc-50/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-zinc-500">COMPONENTS</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                A growing collection of UI building blocks.
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                Explore the components available in Triakshi UI and start
                building your next interface.
              </p>
            </div>

            <Link
              href="/components/button"
              className="text-sm font-semibold text-zinc-900 transition hover:text-zinc-500"
            >
              View all components →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredComponents.map((component) => (
              <Link
                key={component.href}
                href={component.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-0.5
                  hover:border-zinc-300
                  hover:shadow-md
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-700">
                    {component.name.charAt(0)}
                  </div>

                  <span className="text-zinc-300 transition group-hover:translate-x-1 group-hover:text-zinc-700">
                    →
                  </span>
                </div>

                <h3 className="mt-6 font-semibold text-zinc-900">
                  {component.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />

            <span className="ml-3 text-xs text-zinc-500">triakshi-ui</span>
          </div>

          <div className="grid gap-12 px-8 py-16 lg:grid-cols-2 lg:px-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-zinc-500">
                BUILT FOR MODERN PRODUCTS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Clean components.
                <span className="block text-zinc-500">Simple development.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400">
                Use Triakshi UI as the foundation for dashboards, SaaS products,
                admin panels, websites, and internal tools.
              </p>

              <Link
                href="/docs"
                className="
                  mt-7
                  inline-flex
                  w-fit
                  rounded-xl
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-zinc-900
                  transition
                  hover:bg-zinc-100
                "
              >
                Read the documentation
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="space-y-4">
                <div className="h-4 w-32 rounded bg-zinc-800" />

                <div className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-950" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-xl border border-zinc-800 bg-zinc-950" />
                  <div className="h-24 rounded-xl border border-zinc-800 bg-zinc-950" />
                </div>

                <div className="flex gap-3">
                  <div className="h-9 w-24 rounded-lg bg-white" />

                  <div className="h-9 w-24 rounded-lg border border-zinc-700 bg-zinc-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Start building with Triakshi UI.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600">
            Explore the documentation, discover the components, and start
            building your next product with a consistent UI foundation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="
                rounded-xl
                bg-zinc-900
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-zinc-800
              "
            >
              Get Started
            </Link>

            <Link
              href="/components/button"
              className="
                rounded-xl
                border
                border-zinc-200
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-zinc-700
                transition
                hover:bg-zinc-50
              "
            >
              Explore Components
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-semibold text-zinc-900">
              Triakshi UI
            </Link>

            <p className="mt-1 text-xs text-zinc-500">
              A modern React component library.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-xs text-zinc-500 transition hover:text-zinc-900"
            >
              Documentation
            </Link>

            <Link
              href="/components/button"
              className="text-xs text-zinc-500 transition hover:text-zinc-900"
            >
              Components
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
      <span className="text-xs font-semibold text-zinc-400">{number}</span>

      <h3 className="mt-8 text-lg font-semibold text-zinc-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
    </div>
  );
}
