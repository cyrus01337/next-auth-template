"use client";

import { SessionProvider } from "next-auth/react";

import type { FunctionComponent, ReactNode } from "react";

interface Properties {
    children: ReactNode;
}

const AuthProvider: FunctionComponent<Properties> = properties => (
    <SessionProvider>{properties.children}</SessionProvider>
);

export default AuthProvider;
