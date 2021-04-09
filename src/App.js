import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CharactersList from "./components/CharactersList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Navigation />
        </header>
        <main className="Main">
          <Switch>
            <Route path="/characters">
              <CharactersList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
