import React from "react";
import "./index.scss";

interface TweetBodyProps {
    content: string;
}

const TweetBody: React.FC<TweetBodyProps> = ({ content }) => {
    return (
        <div className="tweet-body-container">
            <div className="p-4">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default TweetBody;
