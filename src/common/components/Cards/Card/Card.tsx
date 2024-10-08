import {FC} from "react";
import stl from "common/components/Cards/Card/Card.module.css"
import {CardProps} from "common/types/Card/CardProps.ts";
import {Images} from "common/components/Images/Images.tsx";
import {Icons} from "common/components/Icons/Icons.tsx";
import {Button} from "common/components/Button/Button.tsx";

export const Card: FC<CardProps> = (props) => {
    const {description, address, nearSea, rooms, square, ID, price, image} = props

    return (
        <div className={stl.cardWrapper}>
            <div className={stl.images}>
                <div className={stl.svgOnPics}>
                    <div className={stl.like}>
                        <Icons name={"like"}/>
                    </div>
                    <div className={stl.group}>
                        <Icons name={"group"}/>
                    </div>
                </div>
                <Images className={stl.image} url={image.url} alt={image.alt}/>
            </div>
            <div className={stl.descriptionWrapper}>
                <div className={stl.addressWrapper}>
                    <div className={stl.description}>
                        <h5>{description}</h5>
                    </div>
                    <div className={stl.address}>
                        <span>{address}</span>
                    </div>
                </div>
                <div className={stl.descriptionFlat}>
                    <div className={stl.flatID}>
                        <span>ID: {ID}</span>
                    </div>
                    <div className={stl.square}>
                        <div className={stl.svgIcons}><Icons name={"sqm"}/></div>
                        <span>{square}</span>
                    </div>
                    <div className={stl.rooms}>
                        <div className={stl.svgIcons}><Icons name={"rooms"}/></div>
                        <span>{rooms}</span>
                    </div>
                    <div className={stl.nearSea}>
                        <div className={stl.svgIcons}><Icons name={"sunset"}/></div>
                        <span>{nearSea}</span>
                    </div>
                </div>
                <div className={stl.filter}>
                    <div className={stl.box1}>
                        <h3>ВНЖ</h3>
                    </div>
                    <div className={stl.box2}>
                        <h3>Рассрочка</h3>
                    </div>
                    <div className={stl.box3}>
                        <h3>Вид на море</h3>
                    </div>
                </div>
                <div className={stl.price}>
                    <h2 className={stl.priceText}>Стоимость</h2>
                    <h3>{price}</h3>
                </div>
                <div className={stl.buttons}>
                    <Button className={stl.more}>Подробнее</Button>
                    <Button className={stl.whatsapp}><Icons name={"whatsApp"}/></Button>
                    <Button className={stl.telegram}><Icons name={"telegram"}/></Button>
                    <Button className={stl.phone}><Icons name={"phone"}/></Button>
                </div>
            </div>
        </div>
    );
};
