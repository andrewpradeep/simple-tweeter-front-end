import React from "react";
import { TProfilePicProps } from "./interface";
import "./index.scss";
import { capitalizeFirstWord } from "@/utils/common";

const TProfilePic: React.FC<TProfilePicProps> = (props) => {
    return (
        <>
            <div className="profile-pic">
                {capitalizeFirstWord(props.name)[0]}
            </div>
        </>
    );
};

export default TProfilePic;
