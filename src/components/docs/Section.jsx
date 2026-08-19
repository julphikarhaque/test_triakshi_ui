function Section({ title, description, children }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
}

export default Section;
