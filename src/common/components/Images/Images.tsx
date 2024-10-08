import {FC} from "react";
import {ImageProps} from "common/types/Images/ImageProps.ts";

export const Images: FC<ImageProps> = (props) => {

        return <img className={props.className} src={props.url} alt={props.alt} />
};
