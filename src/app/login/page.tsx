"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

export default function LoginPage() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        setError("");
        setIsLoading(true);

        try {

            const { data, error } = await authClient.signIn.username({
                username,
                password,
            });

            if (error) {
                setError("Invalid username or password.");
                return;
            }

            if (data) {
                router.replace("/dashboard");
                router.refresh();
            }

        } catch {
            setError("An unexpected error occurred.");

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main>
            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    autoComplete="username"
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                />

                {error && (
                    <p>{error}</p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Signing in..." : "Sign in"}
                </button>

            </form>
        </main>
    );
}