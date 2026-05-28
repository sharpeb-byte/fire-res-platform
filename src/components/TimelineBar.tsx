export default function TimelineBar({
  year,
  setYear,
  compare,
  setCompare
}: {
  year: number;
  setYear: (v: number) => void;
  compare: boolean;
  setCompare: (v: boolean) => void;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="text-xs text-white/50">2005</span>

        <input
          className="w-full accent-amber-400"
          type="range"
          min={2005}
          max={2026}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          aria-label="Timeline year"
        />

        <span className="text-xs text-white/50">2026</span>

        <label className="hidden items-center gap-2 text-xs text-white/60 md:flex">
          <input
            type="checkbox"
            checked={compare}
            onChange={(e) => setCompare(e.target.checked)}
          />
          Compare
        </label>
      </div>

      <div className="mt-2 flex justify-between text-[11px] text-white/45">
        <span>Fire history</span>
        <span>Stewardship</span>
        <span>Risk</span>
        <span>Scenario</span>
      </div>
    </div>
  );
}
