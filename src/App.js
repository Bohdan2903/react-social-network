import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from './components/Footer/Footer';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path='/profile'  render={ () =>
              <Profile profilePage={props.state.profilePage}
                       dispatch={props.dispatch}
              /> }
          />
          <Route path='/dialogs' render={ () => <Dialogs store={props.store}/> } />
          <Route path='/users' component={Users} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
};

export default App;
