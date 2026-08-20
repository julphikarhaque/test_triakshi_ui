import Link from "next/link";

function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-semibold text-zinc-900">
            Triakshi UI
          </Link>

          <span className="text-zinc-300">/</span>

          <span className="text-sm text-zinc-500">Documentation</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/docs"
            className="
              text-sm
              text-zinc-600
              transition
              hover:text-zinc-900
            "
          >
            Docs
          </Link>

          <Link
            href="/components/button"
            className="
              text-sm
              text-zinc-600
              transition
              hover:text-zinc-900
            "
          >
            Components
          </Link>

          <Link
            href="/"
            className="
              text-sm
              text-zinc-600
              transition
              hover:text-zinc-900
            "
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default DocsHeader;
