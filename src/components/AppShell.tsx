"use client";

import { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";
import TimelineBar from "./TimelineBar";
import MetricsCards from "./MetricsCards";
import MapView from "./MapView";
import { layers } from "@/lib/layers";

export default function AppShell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLayers, setActiveLayers] = useState<string[]>([
    "fire-history",
    "cultural-burning",
    "risk"
  ]);
  const [year, setYear] = useState(2026);
  const [compare, setCompare] = useState(false);

  const visibleLayers = useMemo(
    () => layers.filter((l) => activeLayers.includes(l.id)),
    [activeLayers]
  );

  const toggleLayer = (id: string) => {
    setActiveLayers((curr) =>
      curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]
    );
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#05070b] text-white">
      <MapView year={year} compare={compare} visibleLayers={visibleLayers} />

      <header className="absolute left-0 right-0 top-0 z-20 flex items-center gap-3 bg-gradient-to-b from-black/90 via-black/50 to-transparent px-3 py-3 md:px-4">
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="min-w-0">
          <div className="text-[13px] font-semibold uppercase tracking-[0.14em] md:text-sm">
            Indigenous Fire & Landscape Resilience Intelligence Platform
          </div>
          <div className="text-[11px] text-white/60 md:text-xs">
            Australia-wide resilience operating system
          </div>
        </div>

        <div className="ml-auto hidden w-full max-w-xl items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 md:flex">
          <span className="mr-2 text-white/45">⌕</span>
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
            placeholder="Search region, project, fire event"
          />
        </div>

        <button className="hidden h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm md:inline-flex">
          Export
        </button>
        <button className="hidden h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm md:inline-flex">
          Scenario Lab
        </button>
      </header>

      <Sidebar
        activeLayers={activeLayers}
        toggleLayer={toggleLayer}
        className="hidden md:flex"
      />

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeLayers={activeLayers}
        toggleLayer={toggleLayer}
      />

      <div className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 md:left-[360px] md:px-4">
        <TimelineBar
          year={year}
          setYear={setYear}
          compare={compare}
          setCompare={setCompare}
        />
      </div>

      <div className="absolute right-3 top-20 z-10 hidden w-[320px] md:block">
        <MetricsCards />
      </div>
    </div>
  );
}
