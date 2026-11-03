"use client";

import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogout() {

        setIsLoading(true);

        try {

            const { error } = await authClient.signOut({});

            if (error) {
                console.error("Logout failed:", error);
                return;
            }

            router.replace("/login");
            router.refresh();

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            onClick={handleLogout}
            disabled={isLoading}
        >
            {isLoading ? "Signing out..." : "Logout"}
        </button>
    );
}