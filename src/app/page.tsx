"use client"; // This is a client component 👈🏽

import TweetComponent from "@/Components/TweetFeed/TweetComponent";
import useServiceWorker from "@/CustomHooks/serviceWorkerHook";

export default function Home() {
    const { serviceRegistration, pushSubscription } = useServiceWorker();

    return (
        <main className="flex min-h-screen flex items-center justify-center p-24">
            <TweetComponent />
        </main>
    );
}
