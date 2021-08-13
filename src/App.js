import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/nav/Header";
import Home from "./components/pages/Home";



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
