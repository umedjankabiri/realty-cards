import {FC} from 'react';
import stl from "./mainLayout.module.css"

export const MainLayout: FC = () => {

    return (
        <div className={stl.mainWrapper}>
            <div className={stl.content}>
                <div className={stl.headerWrapper}>
                    <div className={stl.headerText}>
                        <h2>Найдено 1600 объявлений</h2>
                    </div>
                    <div className={stl.headerSort}>
                        <div className={stl.text}>
                            <span>Сортировка</span>
                        </div>
                        <div className={stl.filter}>
                            <span>По дате: от самых новых</span>
                        </div>
                    </div>
                </div>
                <div className={stl.cards}>

                </div>
                <div className={stl.pagination}></div>
            </div>
        </div>
    );
};
