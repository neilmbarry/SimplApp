import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontPage from "./pages/home/FrontPage/FrontPage";

import SearchResults from "./pages/searchResults/SearchResults";

import ProductPage from "./pages/product/ProductPage/ProductPage";
import AddProductPage from "./pages/addProduct/AddProductPage/AddProductPage";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/search" element={<SearchResults />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/addProduct" element={<AddProductPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
