"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

interface Properties {
    children: ReactNode;
}

export default function AuthProvider(properties: Properties) {
    return <SessionProvider>{properties.children}</SessionProvider>;
}
