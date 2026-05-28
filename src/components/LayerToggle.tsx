export default function LayerToggle({
  id,
  title,
  subtitle,
  checked,
  onChange
}: {
  id: string;
  title: string;
  subtitle: string;
  checked: boolean;
  onChange: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(id)}
      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left"
      aria-pressed={checked}
    >
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-white/50">{subtitle}</div>
      </div>

      <span
        className={[
          "h-5 w-5 rounded-full border transition-colors",
          checked
            ? "border-amber-400 bg-amber-400"
            : "border-white/20 bg-transparent"
        ].join(" ")}
        aria-hidden="true"
      />
    </button>
  );
}
