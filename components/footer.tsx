"use client";

import { useTheme } from "next-themes";

export default function Footer() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme ?? "light" : theme ?? "light";

  const currentYear = new Date().getFullYear();

  const linkClass = currentTheme === "dark"
    ? "font-code-sm text-code-sm text-on-secondary-container hover:text-tertiary transition-colors"
    : "text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors";

  return (
    <footer className="w-full py-stack-lg border-t border-outline-variant bg-surface dark:bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="font-headline-md text-headline-md text-on-surface">
          Chance Hammacher
        </div>
        <div className="flex gap-stack-lg">
          <a
            className={linkClass}
            href="https://github.com/chammacher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={linkClass}
            href="https://www.linkedin.com/in/chance-hammacher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={linkClass}
            href="mailto:chance.hammacher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <div className="font-body-sm dark:font-code-sm text-code-sm text-on-secondary-container">
          © {currentYear} Chance Portfolio. Built with Precision.
        </div>
      </div>
    </footer>
  );
}
