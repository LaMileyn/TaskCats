import React, {FC, useEffect, useRef, useMemo} from 'react';
import s from './CatsPage.module.scss';
import CatCard from "../../Components/CatCard/CatCard";
import {getAllCats} from "../../redux/actionCreators/CatsActionCreators";
import {useAppDispatch, useAppSelector} from "../../redux/store/store";
import Skelletones from "../../helpers/Skelletones";
import GridCards from "../../Components/GridCards/GridCards";
import {useObserver} from "../../hooks/useObserver";
import Loader from "../../Components/Loader/Loader";


const CatsPage: FC = (props) => {
    const {catsDataArray, isLoading, error, totalCatsItems} = useAppSelector(state => state.catsData)
    // how many cats we need  to fetch
    const blocks = useMemo(() => {
        let xItems = Math.ceil((window.innerWidth - 124) / (250 + 32))
        let yItems = Math.ceil((window.innerHeight - 64 - 48) / (250 + 32))
        return xItems * yItems
    }, []);
    const dispatch = useAppDispatch()
    const checkLimit = () => blocks + catsDataArray.length > totalCatsItems ? totalCatsItems - catsDataArray.length : blocks

    // element to observe
    const lastElement = useRef<HTMLDivElement>(null)
    useObserver(lastElement, () => dispatch(getAllCats(checkLimit())), isLoading, totalCatsItems !== catsDataArray.length)
    //



    useEffect(() => {
        if (catsDataArray.length === 0) {
            dispatch(getAllCats(blocks))
        }
    }, [dispatch]);

    return (
        <section className={s['cats-page']}>
            <GridCards>
                {
                    isLoading && catsDataArray.length === 0 && Array(blocks).fill(1).map((el, index) => (
                        <div className={s['cats__card']} key={index}>
                            <Skelletones/>
                        </div>
                    ))
                }
                {
                    catsDataArray.map(el => (
                        <div className={s['cats__card']} key={el.id}>
                            <CatCard data={el}/>
                        </div>
                    ))
                }
            </GridCards>
            {
                isLoading && catsDataArray.length !== 0 && (
                    <div className={s.loader}>
                        <Loader/>
                    </div>
                )
            }
            <div ref={lastElement} className={s['infinite-block']}></div>
        </section>
    );
}

export default CatsPage;