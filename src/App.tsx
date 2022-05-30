import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainLayot from "./Components/MainLayot/MainLayot";
import './styles/main.scss'
import FavouritePage from "./Pages/FavouritePage/FavouritePage";
import CatsPage from "./Pages/CatsPage/CatsPage";

function App() {
  return (
    <Routes>
      <Route path ="/" element = {<MainLayot />}>
        <Route index element={<CatsPage/>}/>
        <Route path='/favouriteCats' element={<FavouritePage />}/>
        <Route path='/allCats' element={<CatsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
