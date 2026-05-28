"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

type LayerDef = { id: string; title: string };

export default function MapView({
  year,
  compare,
  visibleLayers
}: {
  year: number;
  compare: boolean;
  visibleLayers: LayerDef[];
}) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [133.7751, -25.2744],
      zoom: 3.2,
      preserveDrawingBuffer: true
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    map.on("load", () => {
      map.addSource("fire-history", {
        type: "geojson",
         "/data/fire-history.geojson"
      });

      map.addLayer({
        id: "fire-history-fill",
        type: "fill",
        source: "fire-history",
        paint: {
          "fill-color": "#ff8a3d",
          "fill-opacity": 0.35
        }
      });

      map.addLayer({
        id: "fire-history-line",
        type: "line",
        source: "fire-history",
        paint: {
          "line-color": "#ffb07c",
          "line-width": 1.5
        }
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={mapRef} className="absolute inset-0" />

      <div className="absolute left-3 top-20 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 text-xs text-white/70 backdrop-blur">
        Year: {year} {compare ? "· Compare on" : ""}
      </div>

      <div className="absolute right-3 top-20 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 text-xs text-white/70 backdrop-blur">
        {visibleLayers.map((l) => l.title).join(" · ")}
      </div>
    </div>
  );
}
