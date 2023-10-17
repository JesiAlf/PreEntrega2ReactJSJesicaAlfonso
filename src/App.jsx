import {BrowserRouter,Routes,Route}from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/itemListContainer/ItemDetailContainer";
import { NavBar } from "./components/layout/navBar/NavBar";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>Not found</h1>} />
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
