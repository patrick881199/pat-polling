import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePoll from "./components/CreatePollForm";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route path="/createPoll" exact>
        <CreatePoll />
      </Route>
    </div>
  );
}

export default App;
