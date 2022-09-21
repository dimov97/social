import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {updateNewPostText} from "./Redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Route path={'/profile'} render={()=><Profile
                        store={props.store}
                    />}/>
                    <Route path={'/dialogs'} render={()=><DialogsContainer store={props.store}/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>
            </div>
    );
}

export default App;
