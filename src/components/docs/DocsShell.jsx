import DocsHeader from "./DocsHeader";
import DocsSidebar from "./DocsSidebar";

function DocsShell({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <DocsHeader />

      <div className="flex">
        <DocsSidebar />

        <main className="ml-64 min-w-0 flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DocsShell;
