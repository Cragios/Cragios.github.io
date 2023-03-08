function LinkButton({ func, children }) {
  return (
    <button className="rounded-full bg-slate-700 px-8 py-1 text-sm active:bg-slate-800" onClick={func}>
      {children}
    </button>
  );
}

export default LinkButton;
