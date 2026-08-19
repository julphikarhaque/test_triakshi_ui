function ComponentPage({ title, description, children }) {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950">
            {title}
          </h1>

          <p className="mt-3 text-lg text-zinc-500">{description}</p>
        </div>

        <div className="space-y-12">{children}</div>
      </div>
    </main>
  );
}

export default ComponentPage;
