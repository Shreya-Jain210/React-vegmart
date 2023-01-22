import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gifts from "./pages/Gifts";
import Feedback from "./pages/Feedback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Events} />
        <Route path="/gifts" exact component={Gifts} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
