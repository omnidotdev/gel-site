import { FileCode, GitCompareArrows, History, Import } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    icon: FileCode,
    title: "Describe it in Rust",
    description:
      "Declare the packages your machine should have in typed Rust config. Real types, real editor autocomplete, no new language to learn.",
  },
  {
    icon: GitCompareArrows,
    title: "Converge any box",
    description:
      "Point gel at the config and it reconciles the machine to match: installs what is missing, removes what does not belong.",
  },
  {
    icon: History,
    title: "Roll back any change",
    description:
      "Every apply is backed by a filesystem snapshot, so you can undo a change and return the system to a known-good state.",
  },
  {
    icon: Import,
    title: "Import in one command",
    description:
      "Already have a machine you like? Import its current state into a config file with a single command and start from there.",
  },
];

/**
 * "What it does" grid section.
 */
const WhatSection = () => (
  <section className="px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-4 text-center font-bold text-3xl">What gel does</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-base-600 text-lg dark:text-base-400">
        Describe your whole machine once, then converge any box to it and roll
        back anything you do not like.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border-base-200/50 dark:border-base-800/50"
          >
            <CardHeader>
              <item.icon className="mb-2 size-8 text-sky-600 dark:text-sky-400" />
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-base-600 text-sm dark:text-base-400">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhatSection;
