function ResumeSection({ title, children }) {
  return (
    <section className="rounded bg-slate-800">
      <h2 className="rounded-t bg-slate-700 px-8 py-2 text-xl font-bold">{title}</h2>
      <div className="grid gap-2 p-2">{children}</div>
    </section>
  );
}

export default ResumeSection;
