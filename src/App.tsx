import "./App.scss";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed-container">{/* <Navbar /> */}</div>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            {/* <Link to="/admin">Admin</Link> */}
          </header>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer>All right is reserved.</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
