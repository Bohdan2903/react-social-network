import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from './components/Footer/Footer';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    console.log(props);
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile'  render={ () =>
              <Profile /> }
          />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/users' component={Users} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};

export default App;
