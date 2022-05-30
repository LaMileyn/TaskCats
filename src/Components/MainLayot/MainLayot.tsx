import React, {FC} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

const MainLayot: FC = (props) => {
    return (
        <>
            <Header/>
            <div className='container-main'>
                <Outlet/>
            </div>
        </>
    );
}

export default MainLayot;