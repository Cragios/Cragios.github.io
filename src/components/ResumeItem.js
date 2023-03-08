function ResumeItem({ title, date, position, skills, children }) {
  return (
    <div className="rounded px-16 py-2">
      <div className="">
        <div className="flex justify-between align-top">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p>{date}</p>
        </div>
        <div className="flex justify-between text-sm text-slate-400">
          <p className="text-slate-400">{position}</p>
          <p>{skills}</p>
        </div>
      </div>
      <div className="[&>*]:before:content-['-_']">{children}</div>
    </div>
  );
}

export default ResumeItem;
