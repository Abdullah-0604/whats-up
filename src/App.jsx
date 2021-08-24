import "./App.css";
import LoginForm from './components/LoginForm';
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./components/SignupForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => !localStorage.getItem("username") ? <LoginForm />:<Home/>}></Route>
        <Route path='/signup'><SignUp/></Route>
    </Switch>
    </Router>
  );
};

// infinite scroll, logout, more customizations...

export default App;
