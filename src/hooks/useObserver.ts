import {Dispatch, FC, RefObject, useEffect, useRef} from "react";
import {useAppDispatch} from "../redux/store/store";


export const useObserver = ( refElement : any, callBack : () => Promise<void>, isLoading : boolean, canLoad : boolean) => {
    // создаем observer
    // const dispatch = useAppDispatch()
    const observer = useRef<IntersectionObserver | null>()
    useEffect( () => {
        // при состоянии "загрузка" --> выходим из функции.
        if (isLoading) return;
        // проверка - существует ли у нас уже observer ? если да то убираем его
        if ( observer.current ) observer.current?.disconnect()

        let cb = ( entries : any, observer : any ) => {
            // проверка - по низу и можно ли присылать новые данные
            if (entries[0].isIntersecting && canLoad ) {
                callBack()
            }
        }

        observer.current = new IntersectionObserver(cb);
        observer.current?.observe(refElement.current)

    } ,[isLoading])
}
