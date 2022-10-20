import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import ShopProvider from "./context/ShopProvider";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound";
import Cart from "./containers/CartContainer";

function App() {
  const location = useLocation().pathname

  return (
    <ShopProvider>
        <NavBar location={location}/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </ShopProvider>
  );
}

export default App;
