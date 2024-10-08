import {FC} from 'react';
import stl from "./mainLayout.module.css"
import {Icons} from "common/components/Icons/Icons.tsx";
import {Cards} from "common/components/Cards/Cards.tsx";

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
                    <Cards />
                </div>
                <div className={stl.pagination}>

                </div>
            </div>
        </div>
    );
};
