// Main imports
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Styles
import "./App.css";

// Components
import FrontPage from "./pages/home/FrontPage/FrontPage";
import SearchResults from "./pages/searchResults/SearchResults";
import ProductPage from "./pages/product/ProductPage/ProductPage";
import AddProductPage from "./pages/addProduct/AddProductPage/AddProductPage";
import HostPage from "./pages/host/HostPage";
import Menu from "./components/Menu/Menu";
import Modal from "./components/Modals/Modal";
import Notification from "./components/Notifications/Notification";
import Favourites from "./pages/faves/Favourites";

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
        <Route path="/product/:slug" element={<ProductPage />}></Route>
        <Route path="/host/:id" element={<HostPage />}></Route>
        <Route path="/addProduct" element={<AddProductPage />}></Route>
        <Route path="/profile" element={<HostPage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
