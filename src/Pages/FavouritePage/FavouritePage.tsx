import React, {FC} from 'react';
import s from './FavouritePage.module.scss'
import GridCards from "../../Components/GridCards/GridCards";
import Skelletones from "../../helpers/Skelletones";
import CatCard from "../../Components/CatCard/CatCard";
import {useAppDispatch, useAppSelector} from "../../redux/store/store";

const FavouritePage : FC = (props) => {

    const { favouriteCats } = useAppSelector( state => state.catsData )

    console.log(favouriteCats)
    return (
        <section className={s['favourite-page']}>
            <GridCards>
                {
                    favouriteCats.map( el => (
                        <div className={s['favourite__card']} key ={el.id} >
                            <CatCard data = {el} />
                        </div>
                    ))
                }
            </GridCards>
        </section>
    );
}

export default FavouritePage;