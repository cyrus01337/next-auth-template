"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Render from "~/components/client/render";

const BUTTON_CLASS = "btn btn-primary btn-ghost min-w-24";

interface Properties {
    projectName?: string;
}

export default function Navbar(properties: Properties) {
    const { data: session } = useSession();

    return (
        <div className="navbar bg-primary text-primary-content shadow-lg">
            <div className="navbar-start">
                <Link className="btn btn-primary text-xl" href="/">
                    {properties.projectName}
                </Link>
            </div>

            <div className="navbar-end">
                <Render if={session === undefined}>
                    <button className={BUTTON_CLASS}>
                        <span className="loading loading-spinner"></span>
                    </button>
                </Render>

                <Render if={session === null}>
                    <a className={BUTTON_CLASS} onClick={() => signIn()}>
                        Login
                    </a>

                    <Link className={BUTTON_CLASS} href="/sign-up">
                        Sign Up
                    </Link>
                </Render>

                <Render if={session}>
                    <Link className={BUTTON_CLASS} href="/dashboard">
                        Dashboard
                    </Link>

                    <button
                        className={BUTTON_CLASS}
                        onClick={() => signOut({ callbackUrl: "/", redirect: true })}
                    >
                        Logout
                    </button>
                </Render>
            </div>
        </div>
    );
}
