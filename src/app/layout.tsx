import "~/styles/globals.css";

import { Inter } from "next/font/google";

import AuthProvider from "~/app/_components/auth-provider";

import type { Metadata } from "next";
import Navbar from "./_components/navbar";

interface Properties {
    children: React.ReactNode;
}

const INTER = Inter({
    subsets: ["latin"],
    display: "swap",
});
export const metadata: Metadata = {
    title: "Next Auth Boilerplate",
    description: "WIP",
};

export default function RootLayout(properties: Properties) {
    return (
        <html className={INTER.className} lang="en">
            <body>
                <AuthProvider>{properties.children}</AuthProvider>
            </body>
        </html>
    );
}
