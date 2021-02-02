import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Hatspage from './pages/hatspage/Hatspage';
import './App.scss';
import Shoppage from "./pages/shop/Shoppage";
import Header from "./components/header/Header";
import Authpage from "./pages/authpage/Authpage";

function App() {
  return (
    <>
    {/* Switch component enders the first matching route, Without it,
        multiple components may be rendered */}
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={Hatspage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={Authpage} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
