const WebSocketUtil = (function () {
    let webSocketConnection: WebSocket;

    const handleMessage = (event: any) => {
        console.log("message Send from server", event);
    };

    const connect = () => {
        webSocketConnection = new WebSocket("ws://localhost:8080");

        webSocketConnection.onopen = (event) => {
            console.log("websocket connection opened", event);
        };

        webSocketConnection.onmessage = handleMessage;

        webSocketConnection.onclose = () => {
            closeConnection();
        };
        webSocketConnection.onerror = (event: any) => {
            console.error(event);
            closeConnection();
        };
    };

    const sendMessage = (msg: any) => {
        if (webSocketConnection.readyState === WebSocket.OPEN) {
            webSocketConnection.send(msg);
        }
    };

    const closeConnection = () => {
        webSocketConnection.close();
    };

    return {
        connect,
        sendMessage,
        closeConnection,
    };
})();

export default WebSocketUtil;
