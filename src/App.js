import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CharactersList from "./components/CharactersList";
import IndividualCharacter from "./components/IndividualCharacter";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Navigation />
        </header>
        <main className="Main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/characters/:id">
              <IndividualCharacter />
            </Route>
            <Route path="/characters">
              <CharactersList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
