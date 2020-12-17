import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfilesContainer from "./components/Profile/ProfilesContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/profile'  render={ () =>
              <ProfilesContainer /> }
          />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/users' render={ () => <UsersContainer /> }/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};

export default App;
