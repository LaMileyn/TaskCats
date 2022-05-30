import React, {FC} from 'react';
import s from './GridCards.module.scss'

interface IGridProps {
    children: React.ReactNode;
}

const GridCards: FC<IGridProps> = ({children}) => {
    return (
        <div className={s['page__content']}>
            {children}
        </div>
    );
}

export default GridCards;