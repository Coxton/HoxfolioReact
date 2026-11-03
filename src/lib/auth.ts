
import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { db } from "./db";

if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is not configured");
}

export const auth = betterAuth({
    database: db,
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,

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
