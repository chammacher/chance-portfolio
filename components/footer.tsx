import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-stack-lg border-t border-outline-variant bg-surface-container-lowest dark:bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="font-headline-md text-headline-md text-on-surface">
          Chance Hammacher
        </div>
        <div className="flex gap-stack-lg">
          <a
            className="font-code-sm text-code-sm text-on-secondary-container hover:text-tertiary transition-colors"
            href="https://github.com/chammacher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="font-code-sm text-code-sm text-on-secondary-container hover:text-tertiary transition-colors"
            href="https://www.linkedin.com/in/chance-hammacher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-code-sm text-code-sm text-on-secondary-container hover:text-tertiary transition-colors"
            href="mailto:chance.hammacher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <div className="font-code-sm text-code-sm text-on-secondary-container">
          © {currentYear} Chance Portfolio. Built with Precision.
        </div>
      </div>
    </footer>
  );
}
