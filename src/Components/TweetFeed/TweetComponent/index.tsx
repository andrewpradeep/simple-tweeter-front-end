"use client"; // This is a client component 👈🏽
import React, { useEffect } from "react";
import TweetBody from "../TweetBody";
import TweetFooter from "../TweetFooter";
import TweetHeader from "../TweetHeader";
import "./index.scss";
import WebSocketUtil from "@/utils/WebSocketUtil";

export interface TweetComponentProps {
    tweetDetails?: any;
}

const TweetComponent: React.FC<TweetComponentProps> = (tweetDetails) => {
    useEffect(() => {
        WebSocketUtil.connect();

        const interval = setInterval(() => {
            WebSocketUtil.sendMessage("hello there");
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
        }, 300000);

        return () => {
            WebSocketUtil.closeConnection();
            clearInterval(interval);
        };
    });

    return (
        <div className="tweet-component-container">
            <TweetHeader
                userName={{ name: "pradeep", id: "sdksldknks1323" }}
                displayName={"pradeep"}
                date={Date.now()}
            />
            <TweetBody content={"today is a long day at the office"} />
            <TweetFooter replyCount={438} retweetCount={345} />
        </div>
    );
};

export default TweetComponent;
