import React, {FC, useEffect, useRef, useState} from 'react';
import s from './CatCard.module.scss';
import {ICats} from "../../types/Cats/types";
import heart from './../../files/heart-standart.png'
import heartHov from './../../files/heart-hover.png'
import heartAct from './../../files/heart-active.png'
import {useAppDispatch, useAppSelector} from "../../redux/store/store";
import {addToFavoruites, removeFromFavoruites} from "../../redux/reducers/CatsReducer";


interface ICatCard {
    data: ICats
}

const CatCard: FC<ICatCard> = ({data}) => {

    const [imageSrc,setImageSrc] = useState(heart)

    const { favouriteCats }  = useAppSelector( state => state.catsData )
    const dispatch = useAppDispatch()

    const addToFav = () => {
        if ( imageSrc !== heartAct ) {
            dispatch(addToFavoruites(data))
            setImageSrc(heartAct)
        } else{
            dispatch(removeFromFavoruites(data.id))
            setImageSrc(heart)
        }
    }
    useEffect( () => {
        if (favouriteCats.indexOf(data) !== -1) setImageSrc(heartAct)

    },[])
    const hoverHeart = () => imageSrc !==  heartAct && setImageSrc(heartHov)
    const UnhoverHeart = () => imageSrc !== heartAct && setImageSrc(heart)

    // @ts-ignore
    return (
        <div className={s['cat-card']}>
            <img className={s['card__image-back']} src={data.url} alt=""/>
            <img src={imageSrc} className={s['card__image-heart']} alt=""
                 onMouseEnter={hoverHeart} onMouseLeave={UnhoverHeart}
                 onClick={addToFav}
            />
        </div>
    );
}

export default CatCard;