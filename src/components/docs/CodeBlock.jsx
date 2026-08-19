function CodeBlock({ children }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-5 text-sm leading-6 text-zinc-100">
      <code>{children}</code>
    </pre>
  );
}

export default CodeBlock;
