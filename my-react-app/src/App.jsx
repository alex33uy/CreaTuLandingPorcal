import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route
            exact
            path="/ItemListContainer"
            element={<ItemListContainer />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
