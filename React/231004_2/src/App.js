import './App.css';
import cartContext from './store/cartContext.js'
import { useState } from 'react';
import Header from './Component/header';
import {Outlet} from "react-router-dom";

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <div>
      <cartContext.Provider value={{shoppingCart, setShoppingCart}} >
        <Header/>
        <Outlet />
      </cartContext.Provider>
    </div>
  );
}

export default App;
