const cacheName = "v1";

const cloneAssetsToCache = async (event) => {
    const res = await fetch(event.request);
    const resClone = res.clone();

    const cache = await caches.open(cacheName);
    await cache.put(event.request, resClone);

    return res;
};

const setFetchListener = () => {
    self.addEventListener("fetch", (event) => {
        event.respondWith(
            cloneAssetsToCache(event)
                .catch(() => {
                    const cacheValue = caches.match(event.request);
                    if (cacheValue) {
                        return cacheValue;
                    }
                    console.log(e);
                    throw e;
                })
                .then((res) => {
                    return res;
                })
        );
    });
};

const setPushNotificationListener = () => {
    self.addEventListener("push", async (event) => {
        event.waitUntil(
            self.registration.showNotification("hello world", {
                requireInteraction: true,
                icon: "next.svg",
                body: "Body of notification",
                tag: "message-1",
                data: {
                    name: "pradeep",
                },
                vibrate: true,
                sound: true,
                actions: [
                    {
                        action: "coffee-action",
                        icon: "vercel.svg",
                        type: "button",
                        title: "coffee",
                    },
                ],
            })
        );
    });

    self.addEventListener("notificationclick", (event) => {
        if (event.action === "coffee-action") {
            console.log("cofee-action");
        }
    });
};

setFetchListener();
setPushNotificationListener();
