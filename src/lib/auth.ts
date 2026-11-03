
import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { getDb } from "./db";

if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is not configured");
}

export const auth = betterAuth({
    database: getDb(),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,

    advanced: {
        database: {
            validateSchema: process.env.SKIP_AUTH_SCHEMA_VALIDATION !== "true",
        },
    },

    emailAndPassword: {
        enabled: true,
        disableSignUp: true,
        minPasswordLength: 12,
        maxPasswordLength: 128,
    },

    plugins: [
        username({
            immutableUsername: true,
        }),
    ],
});
