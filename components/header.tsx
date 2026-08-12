"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Header() {
    const pathname = usePathname();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme ?? "light" : theme ?? "light";

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Highlights", href: "/highlights" },
        { label: "Experience", href: "/experience" },
        { label: "Skills", href: "/skills" },
    ];

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="w-full sticky top-0 bg-surface border-b border-outline-variant z-50">
            <div className="flex justify-between items-center max-w-container-max mx-auto px-md h-16">
                <Link className="font-h3 text-h3 font-bold text-on-surface" href="/">Portfolio</Link>
                <nav className="hidden md:flex gap-stack-lg items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`font-body-md text-body-md transition-colors ${isActive(item.href) ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface"}`}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-sm">
                    <button
                        type="button"
                        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                        className="text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer p-xs"
                        aria-label="Toggle theme"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon={currentTheme === "dark" ? "light_mode" : "dark_mode"}
                        />
                    </button>
                    <button className="md:hidden text-on-surface-variant p-xs" aria-label="Open menu">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}