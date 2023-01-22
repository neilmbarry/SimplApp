import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import FrontPage from "./pages/home/FrontPage/FrontPage";

import SearchResults from "./pages/searchResults/SearchResults";

import ProductPage from "./pages/product/ProductPage/ProductPage";
import AddProductPage from "./pages/addProduct/AddProductPage/AddProductPage";
import HostPage from "./pages/host/HostPage";
import Menu from "./components/Menu/Menu";
import Modal from "./components/Modals/Modal";
import Notification from "./components/Notifications/Notification";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Menu />
      <Modal />
      <Notification />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/host" element={<HostPage />}></Route>
        <Route path="/addProduct" element={<AddProductPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
