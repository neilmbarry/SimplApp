import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import FrontPage from "./components/FrontPage/FrontPage";
import SearchResults from "./components/SearchResults/SearchResults";
import ProductPage from "./components/ProductPage/ProductPage";
import AddProductPage from "./components/AddProductPage/AddProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/addProduct" element={<AddProductPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
