import process from "process";

import { createEnv } from "@t3-oss/env-core";
import { z as zod } from "zod";

export default createEnv({
    client: {
        NEXT_PUBLIC_PROJECT_NAME: zod.string().optional().default("Project Name"),
    },
    clientPrefix: "NEXT_PUBLIC_",
    emptyStringAsUndefined: true,
    runtimeEnv: process.env,
    server: {
        NEXTAUTH_SECRET: zod.string().nonempty(),
        NEXTAUTH_URL: zod.url(),
    },
});
