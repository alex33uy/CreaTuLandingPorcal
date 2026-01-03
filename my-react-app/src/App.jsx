import Navbar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/CartWidget" element={<CartWidget />} />
        <Route exact path="/ItemListContainer" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
          
 
      </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
