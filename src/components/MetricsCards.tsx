const metrics = [
  { title: "Severe fire intensity", value: "+32% over 10 years" },
  { title: "Managed stewardship area", value: "1.84M ha" },
  { title: "Avoided emissions", value: "12.2 Mt CO2e" },
  { title: "Insurance exposure", value: "High in WUI corridors" }
];

export default function MetricsCards() {
  return (
    <div className="space-y-3">
      {metrics.map((m) => (
        <div
          key={m.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
        >
          <div className="text-xs uppercase tracking-[0.14em] text-white/45">
            {m.title}
          </div>
          <div className="mt-2 text-lg font-semibold">{m.value}</div>
        </div>
      ))}
    </div>
  );
}
