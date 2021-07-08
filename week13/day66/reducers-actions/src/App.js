import "./App.css";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Individual from "./components/Individual";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar-container">
          <nav className="nav-bar">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
                alt=""
              />
            </Link>
            <Link to="/stuff">Buy the Stuff</Link>
            <Link to="/about">Why I'm Selling</Link>
            <Link to="/cart">
              <img
                src="https://www.pngfind.com/pngs/m/609-6098891_pewdiepie-shopping-cart-png-transparent-png.png"
                alt=""
              />
            </Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <h1>Getting Rid of My Roomates Stuff!</h1>
            <Landing />
          </Route>
          <Route path="/item/:id">
            <Individual />
          </Route>
          <Route path="/stuff">
            <Products />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
