import Sidebar from "./Sidebar";

export default function MobileDrawer({
  open,
  onClose,
  activeLayers,
  toggleLayer
}: {
  open: boolean;
  onClose: () => void;
  activeLayers: string[];
  toggleLayer: (id: string) => void;
}) {
  return (
    <div
      className={[
        "fixed inset-0 z-40 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-black/60 transition-opacity",
          open ? "opacity-100" : "opacity-0"
        ].join(" ")}
        onClick={onClose}
      />

      <div
        className={[
          "absolute left-0 top-0 h-full w-[88vw] max-w-[360px] bg-[#0a0f18] p-4 shadow-2xl transition-transform",
          open ? "translate-x-0" : "-translate-x-full"
        ].join(" ")}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em]">
              Modules
            </div>
            <div className="text-xs text-white/50">
              Mobile control panel
            </div>
          </div>

          <button
            className="h-10 rounded-2xl border border-white/10 bg-white/5 px-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <Sidebar
          activeLayers={activeLayers}
          toggleLayer={toggleLayer}
          className="!static !h-auto !w-full !border-0 !bg-transparent !p-0 !backdrop-blur-0"
        />
      </div>
    </div>
  );
}
