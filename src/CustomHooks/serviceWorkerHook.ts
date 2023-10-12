import PushNotificationService from "@/Services/PushNotification";
import { useState, useEffect } from "react";

const useServiceWorker = () => {
    const [serviceRegistration, setServiceRegistration] =
        useState<ServiceWorkerRegistration | null>(null);

    const [pushSubscription, setPushSubscription] = useState<
        PushSubscription | undefined
    >();

    useEffect(() => {
        handleServiceWorkerRegistration();
    }, []);

    useEffect(() => {
        if (serviceRegistration) {
            handlePushNotifcation();
        }
    }, [serviceRegistration]);

    const handleServiceWorkerRegistration = async () => {
        if ("serviceWorker" in navigator) {
            const setReg = await navigator.serviceWorker.register(
                "./service-worker.js"
            );
            setServiceRegistration(setReg);
        } else {
            console.error("Service Worker not supported");
        }
    };

    const handlePushNotifcation = async () => {
        if ("PushManager" in window) {
            const permission = await Notification.requestPermission();

            if (permission === "granted") {
                const pushSub =
                    await serviceRegistration?.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey:
                            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
                    });

                setPushSubscription(pushSub);

                if (pushSub) {
                    PushNotificationService.saveSubscription(pushSub);
                }
            }
        } else {
            console.error("push notifications not supported");
        }
    };

    return {
        serviceRegistration,
        pushSubscription,
    };
};

export default useServiceWorker;
