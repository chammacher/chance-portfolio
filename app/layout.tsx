import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Chance Hammacher — Senior Software Engineer",
    description: "Senior Software Engineer — chance.hammacher@gmail.com",
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className="min-h-full flex flex-col">
                <Header />

                {children}
                <Footer />

            </body>
        </html>
    );
}
