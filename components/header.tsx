"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
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
        <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant">
            <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-16">
                <Link className="font-headline-md text-headline-md font-bold text-on-surface" href="/">Chance Hammacher</Link>
                <nav className="hidden md:flex gap-stack-lg items-center">
                    {navItems.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                aria-current={active ? "page" : undefined}
                                className={`font-body-md text-body-md transition-colors ${active ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface"}`}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-stack-md">
                    <a
                        className="hidden md:block px-stack-md py-stack-sm rounded-lg border border-outline-variant text-on-surface hover:text-primary transition-all duration-200 font-label-caps text-label-caps"
                        href="/Chance-Hammacher-Resume.pdf"
                        download
                    >
                        Resume
                    </a>
                    <Link className="bg-primary text-on-primary px-stack-md py-stack-sm rounded-lg hover:brightness-110 active:scale-95 transition-all font-label-caps text-label-caps" href="/contact">Contact</Link>
                </div>
            </div>
        </header>
    );
}