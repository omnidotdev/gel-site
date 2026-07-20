/**
 * Ambient background with gradient orbs and grid overlay.
 */
const Background = () => (
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-sky-50 via-cyan-50 to-slate-50 dark:from-base-950 dark:via-base-900 dark:to-base-950" />

    {/* ambient glow orbs */}
    <div className="absolute top-1/4 left-1/4 h-125 w-125 rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-400/5" />
    <div className="absolute top-1/2 right-1/4 h-100 w-100 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-400/5" />
    <div className="absolute bottom-1/4 left-1/2 h-75 w-75 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-400/5" />

    {/* grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }}
    />
  </div>
);

export default Background;
