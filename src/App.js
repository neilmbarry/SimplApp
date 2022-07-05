import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import FrontPage from "./components/FrontPage/FrontPage";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/search" element={<SearchResults />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
