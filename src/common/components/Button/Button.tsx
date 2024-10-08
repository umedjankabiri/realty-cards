import {FC} from "react";
import {ButtonProps} from "common/types/Button/ButtonProps.ts";

export const Button: FC<ButtonProps> = (props) => {

    return (
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    );
};
