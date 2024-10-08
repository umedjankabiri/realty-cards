import {FC} from "react";
import stl from "common/components/Cards/Cards.module.css";
import {Card} from "common/components/Cards/Card/Card.tsx";
import {cardData1, cardData2, cardData3} from "common/utils/cardData.ts";

export const Cards: FC = () => {
    const mappedImages1 = cardData1.map((data) => (
        <Card key={data.ID}
              image={data.image}
              description={data.description}
              address={data.address}
              ID={data.ID}
              square={data.square}
              rooms={data.rooms}
              nearSea={data.nearSea}
              price={data.price}
        />
    ))
    const mappedImages2 = cardData2.map((data) => (
        <Card key={data.ID}
              image={data.image}
              description={data.description}
              address={data.address}
              ID={data.ID}
              square={data.square}
              rooms={data.rooms}
              nearSea={data.nearSea}
              price={data.price}
        />
    ))
    const mappedImages3 = cardData3.map((data) => (
        <Card key={data.ID}
              image={data.image}
              description={data.description}
              address={data.address}
              ID={data.ID}
              square={data.square}
              rooms={data.rooms}
              nearSea={data.nearSea}
              price={data.price}
        />
    ))

    return (
        <div className={stl.cardsWrapper}>
            <div className={stl.map1}>{mappedImages1}</div>
            <div className={stl.map2}>{mappedImages2}</div>
            <div className={stl.map3}>{mappedImages3}</div>
        </div>
    );
};
