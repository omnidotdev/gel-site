import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const points = [
  "Declarative: your machine is described in one place, not accumulated by hand",
  "Roll-back-able: filesystem snapshots let you undo any change",
  "No new language: config is typed Rust, not a bespoke expression language",
  "Still Arch: pacman, the AUR, and the rest of your setup stay exactly where they are",
];

/**
 * Positioning section: where gel sits relative to other declarative systems.
 */
const WhyNotNixSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl border border-base-200/70 bg-white/60 p-8 backdrop-blur-sm sm:p-12 dark:border-base-800/70 dark:bg-base-950/60">
        <div className="mb-4 flex justify-center">
          <Badge className="border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300">
            Positioning
          </Badge>
        </div>

        <h2 className="mb-4 text-center font-bold text-3xl">
          Most of the reproducibility, none of the relearning
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-base-600 text-lg dark:text-base-400">
          gel aims for roughly 80 percent of the declarative, roll-back-able
          experience people go to NixOS for, while staying on Arch and skipping
          the Nix language entirely.
        </p>

        <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <Check className="mt-0.5 size-5 shrink-0 text-sky-600 dark:text-sky-400" />
              <span className="text-base-700 text-sm dark:text-base-300">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base-500 text-sm">
          Honest status: gel is early. Phase 1 covers declarative package
          management with snapshot-backed rollback. Services, dotfiles, and
          system settings are on the roadmap, not shipped yet.
        </p>
      </div>
    </div>
  </section>
);

export default WhyNotNixSection;
