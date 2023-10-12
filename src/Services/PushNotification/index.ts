import axios from "axios";

const saveSubscriptionUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pushnotification/subscription`;

const PushNotificationService = {
    saveSubscription: (details: PushSubscription) => {
        return axios.post(saveSubscriptionUrl, details, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
};

export default PushNotificationService;
