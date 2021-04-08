// import { useState } from "react";
// import ThemeToggler from "./components/ThemeToggler";
import "./styles/main.scss"
import Header from "./components/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SocialMenu from "./components/SocialMenu";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  // const [theme, setTheme] = useState("light");
  
  // const toggleTheme = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // }



  return (
    <div className={"App"}>
      <Router>
        <Header/>
        <Switch>
          <Router exact path="/">
            <Work/>
          </Router>

          <Router path="/about">
            <About/>
          </Router>
        </Switch>
        
        <SocialMenu/>
      </Router>
    </div>
  );
}

export default App;
