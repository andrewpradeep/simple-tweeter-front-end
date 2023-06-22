import React from "react";
import OptionsIcon from "@/Components/Icons/OptionsIcon";
import "./index.scss";
import { TOptionsProps } from "./interface";
const TOptions: React.FC<TOptionsProps> = (props) => {
    return (
        <div className={`t-option-container ${props.className}`}>
            <OptionsIcon width={20} height={20} />
        </div>
    );
};

export default TOptions;
