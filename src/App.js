 import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
 import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = ({state, dispatch, store}) =>   {
  return (
          <div className='app-wrapper'>
              <Header/>
              <Navbar userFriends={state.sideBar.userFriends}/>
              <div className='app-wrapper-content'>
                  <Route path="/dialogs"
                         render={ () => <DialogsContainer store={store} /> }/>
                  <Route path="/profile"
                         render={ () => <Profile store={store}/> }/>
                  <Route path="/news" component={News}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/settings" component={Settings}/>
              </div>
          </div>
  );
}


export default App;
