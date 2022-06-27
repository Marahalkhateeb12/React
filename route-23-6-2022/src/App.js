//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
//import { Navbar, Nav } from "react-bootstrap";
//import Footer from './components/footer';

function App() {
  return (
    <div>
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li class="nav-item "> 
      <NavLink to="/" activeClassName='active-link'> Home </NavLink>
      </li>
      <li class="nav-item"><NavLink to="/about"> About </NavLink></li>
      <li class="nav-item"> <NavLink to="/profile"> Profile </NavLink></li>
      </ul>
      </div>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  </Router>
{/* <Footer /> */}
  </div>  );
}

export default App;
