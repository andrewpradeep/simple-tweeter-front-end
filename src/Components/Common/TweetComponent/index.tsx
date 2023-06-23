"use client"; // This is a client component 👈🏽
import React from "react";
import TweetBody from "../TweetBody";
import TweetFooter from "../TweetFooter";
import TweetHeader from "../TweetHeader";
import "./index.scss";

export interface TweetComponentProps {
    tweetDetails?: any;
}

const TweetComponent: React.FC<TweetComponentProps> = (tweetDetails) => {
    return (
        <div className="tweet-component-container">
            <TweetHeader
                userName={{ name: "pradeep", id: "sdksldknks1323" }}
                displayName={"pradeep"}
                date={Date.now().toString()}
            />
            <TweetBody content={"today is a long day at the office"} />
            <TweetFooter replyCount={438} retweetCount={345} />
        </div>
    );
};

export default TweetComponent;
