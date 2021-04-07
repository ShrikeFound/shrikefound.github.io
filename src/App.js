import { useState } from "react";
import ThemeToggler from "./components/ThemeToggler";
import "./styles/main.scss"
// import 'rsuite/dist/styles/rsuite-default.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SocialMenu from "./components/SocialMenu";
import Work from "./pages/Work";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }



  return (
    <div className={`App ${theme==="dark" ? "dark-mode" : ""}`}>
      <Router>
        <Header />
        <Switch>
          <Router exact path="/">
            <Work/>
          </Router>
        </Switch>
        {/* <ThemeToggler toggleTheme={() => toggleTheme()}/> */}
      <SocialMenu/>
      </Router>
    </div>
  );
}

export default App;
