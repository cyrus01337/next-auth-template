import "~/styles/globals.css";

import { Inter } from "next/font/google";

import AuthProvider from "~/app/_components/auth-provider";
import Navbar from "~/app/_components/navbar";
import environment from "~/server/environment";

import type { Metadata } from "next";

interface Properties {
    children: React.ReactNode;
}

const INTER = Inter({
    display: "swap",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    description: "WIP",
    title: environment.NEXT_PUBLIC_PROJECT_NAME,
};

export default function RootLayout(properties: Properties) {
    return (
        <html className={INTER.className} lang="en">
            <body>
                <AuthProvider>
                    <div className="flex flex-col h-dvh">
                        <Navbar projectName={environment.NEXT_PUBLIC_PROJECT_NAME} />

                        {properties.children}
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
