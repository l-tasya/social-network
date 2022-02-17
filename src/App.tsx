import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ReduxStoreType} from './redux/store/redux-store';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from "./components/News/News";
import Dialogs from './components/Dialogs/Dialogs';

//types
type AppPropsType = {
    store: ReduxStoreType
}


const App: React.FC<AppPropsType> = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={'Social Network'}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfileContainer/>} path='/social-network/profile'/>


                    <Route render={() => <Dialogs/>} path='/social-network/dialogs'/>


                    <Route render={() => <UsersContainer/>} path='/social-network/users'/>


                    <Route render={() => <News/>} path='/social-network/feed'/>


                    <Route render={() => <Music/>} path='/social-network/audio'/>


                    <Route render={() => <Settings/>} path='/social-network/settings'/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
