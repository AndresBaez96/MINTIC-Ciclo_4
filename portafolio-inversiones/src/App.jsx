import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/Crear Inversion/CrearInversion";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container">
        <Switch>
            <Route exact path="/"> 
              <Inicio />
            </Route>
            <Route path="/Crear-Inversion">
              <CrearInversion />
            </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
