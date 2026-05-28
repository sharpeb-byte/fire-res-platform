import LayerToggle from "./LayerToggle";

export default function Sidebar({
  activeLayers,
  toggleLayer,
  className = ""
}: {
  activeLayers: string[];
  toggleLayer: (id: string) => void;
  className?: string;
}) {
  return (
    <aside
      className={[
        "absolute left-4 top-20 z-20 h-[calc(100vh-6rem)] w-[330px] flex-col gap-4 overflow-auto rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl",
        className
      ].join(" ")}
    >
      <div>
        <h2 className="text-xs uppercase tracking-[0.16em] text-white/50">
          Modules
        </h2>

        <div className="mt-3 space-y-3">
          <LayerToggle
            id="fire-history"
            title="Fire History"
            subtitle="20+ years of events"
            checked={activeLayers.includes("fire-history")}
            onChange={toggleLayer}
          />

          <LayerToggle
            id="cultural-burning"
            title="Cultural Burning"
            subtitle="Projects and stewardship"
            checked={activeLayers.includes("cultural-burning")}
            onChange={toggleLayer}
          />

          <LayerToggle
            id="risk"
            title="Risk"
            subtitle="Exposure and corridors"
            checked={activeLayers.includes("risk")}
            onChange={toggleLayer}
          />

          <LayerToggle
            id="ecology"
            title="Ecology"
            subtitle="Recovery and biodiversity"
            checked={activeLayers.includes("ecology")}
            onChange={toggleLayer}
          />

          <LayerToggle
            id="carbon"
            title="Carbon"
            subtitle="Emissions and avoided loss"
            checked={activeLayers.includes("carbon")}
            onChange={toggleLayer}
          />
        </div>
      </div>
    </aside>
  );
}
