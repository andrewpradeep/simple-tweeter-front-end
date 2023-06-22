import React, { useMemo } from "react";
import TOptions from "../TOptions";
import TProfilePic from "../TProfilePic";
import { TweetHeaderProps } from "./interface";

const TweetHeader: React.FC<TweetHeaderProps> = ({
    displayName,
    userName,
    date,
}) => {
    const tweetDate = useMemo(() => {
        console.log("new date", date);
        return new Date(date.toString());
    }, [date]);
    return (
        <div className="flex">
            <TProfilePic name={displayName}></TProfilePic>
            <div className="py-4 flex justify-between flex-col">
                <span className="block">{displayName}</span>
                <span className="block">{userName.name}</span>
            </div>
            <div className="flex justify-center items-center m-3">
                <span>{tweetDate.toDateString()}</span>
            </div>

            <TOptions className="ml-auto" />
        </div>
    );
};

export default TweetHeader;
