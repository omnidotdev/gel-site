import { Terminal } from "lucide-react";

const configExample = `use gel::prelude::*;

// Your machine, described as data.
pub fn system() -> System {
    System::new()
        .packages([
            "git",
            "neovim",
            "ripgrep",
            "docker",
        ])
        // services, dotfiles, and settings are on the roadmap
        .build()
}`;

const commandExample = `# converge this machine to the config
gel apply

# undo the last apply via snapshot
gel rollback

# capture an existing machine as config
gel import`;

/**
 * Config and command example section.
 */
const ConfigSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-center font-bold text-3xl">
        Config you can actually read
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-base-600 text-lg dark:text-base-400">
        Your system is a Rust value. Edit it, apply it, roll it back.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-base-200/70 bg-white/70 backdrop-blur-sm dark:border-base-800/70 dark:bg-base-950/70">
          <div className="flex items-center gap-2 border-base-200/70 border-b px-4 py-2.5 dark:border-base-800/70">
            <span className="size-3 rounded-full bg-base-300 dark:bg-base-700" />
            <span className="size-3 rounded-full bg-base-300 dark:bg-base-700" />
            <span className="size-3 rounded-full bg-base-300 dark:bg-base-700" />
            <span className="ml-2 text-base-500 text-xs">system.rs</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-base-700 text-sm leading-relaxed dark:text-base-300">
            <code>{configExample}</code>
          </pre>
        </div>

        <div className="overflow-hidden rounded-lg border border-base-200/70 bg-white/70 backdrop-blur-sm dark:border-base-800/70 dark:bg-base-950/70">
          <div className="flex items-center gap-2 border-base-200/70 border-b px-4 py-2.5 dark:border-base-800/70">
            <Terminal className="size-4 text-base-500" />
            <span className="text-base-500 text-xs">terminal</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-base-700 text-sm leading-relaxed dark:text-base-300">
            <code>{commandExample}</code>
          </pre>
        </div>
      </div>

      <p className="mt-6 text-center text-base-500 text-xs">
        Illustrative. See the docs for the current API.
      </p>
    </div>
  </section>
);

export default ConfigSection;
