import './App.css';
// import cartContext from './store/cartContext.js'
import Header from './Component/header';
import {Outlet} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div>
      {/* <cartContext.Provider value={{shoppingCart, setShoppingCart}} > */}
        <Provider store={store}>
          <Header/>
          <Outlet />
        </Provider>
      {/* </cartContext.Provider> */}
    </div>
  );
}

export default App;
