import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import app from "@/lib/config/app.config";

/**
 * Final call-to-action section.
 */
const CTASection = () => (
  <section className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mb-6 font-bold text-3xl">Set your machine solid</h2>
      <p className="mb-8 text-base-600 text-lg dark:text-base-400">
        Import your current setup, describe it in Rust, and converge with
        confidence.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500"
          onClick={() => window.open(app.links.github, "_blank")}
        >
          <Github className="mr-2 size-5" />
          View on GitHub
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => window.open(app.links.docs, "_blank")}
        >
          Read the Docs
          <ArrowRight className="ml-2 size-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
