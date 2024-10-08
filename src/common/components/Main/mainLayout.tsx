import {FC} from 'react';
import stl from "./mainLayout.module.css"
import {Icons} from "common/components/Icons/Icons.tsx";
import {Cards} from "common/components/Cards/Cards.tsx";
import {Button} from "common/components/Button/Button.tsx";

export const MainLayout: FC = () => {

    return (
        <div className={stl.mainWrapper}>
            <div className={stl.content}>
                <div className={stl.headerWrapper}>
                    <div className={stl.headerText}>
                        <h2>Найдено 1600 объявлений</h2>
                    </div>
                    <div className={stl.headerSort}>
                        <div className={stl.sort}>
                            <Icons name={"sorting"}/> <span>Сортировка</span>
                        </div>
                        <div className={stl.filter}>
                            <span>По дате: от самых новых</span> <Icons name={"arrow"}/>
                        </div>
                    </div>
                </div>
                <div className={stl.cards}>
                    <Cards/>
                </div>
                <div className={stl.paginationWrapper}>
                    <div>
                        <Button className={stl.selectedFromTo}>Показать еще 16 из 280</Button>
                    </div>
                    <div className={stl.paginationButtons}>
                        <Button className={stl.selectedButton}>1</Button>
                        <Button className={stl.nextButton}>2</Button>
                        <Button className={stl.nextButton}>3</Button>
                        <div className={stl.points}>...</div>
                        <Button className={stl.nextButton}>24</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
