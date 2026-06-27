export default function SectionDivider() {
  return (
    <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-0.5">
      <div className="flex-1 h-px bg-stone-300" />
      <span className="font-mono text-xs text-cartoon-green font-bold select-none">$ _</span>
      <div className="flex-1 h-px bg-stone-300" />
    </div>
  );
}
