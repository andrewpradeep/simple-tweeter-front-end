import TweetReplyIcon from "@/Components/Icons/TweetReplyIcon";
import React from "react";
import "./index.scss";

export interface TweetFooterProps {
    replyCount: number;
    retweetCount: number;
}

const TweetFooter: React.FC<TweetFooterProps> = ({
    replyCount,
    retweetCount,
}) => {
    return (
        <div className="tweet-footer-container">
            <div>
                <TweetReplyIcon width={20} height={20} />
                <span>{replyCount}</span>
            </div>
            <div>
                <TweetReplyIcon width={20} height={20} />
                <span>{retweetCount}</span>
            </div>
        </div>
    );
};

export default TweetFooter;
