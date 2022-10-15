import './App.css'
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import ShopProvider from './context/ShopProvider';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './containers/CartContainer';
import CheckOut from './components/Checkout';


function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= "/" element={<ItemListContainer/>}/>
          <Route path= "/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes> 
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
