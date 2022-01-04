import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import {ReduxStoreType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';

//types
type AppPropsType = {
    store: ReduxStoreType
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={'Social Network'}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile store={props.store}/>} path='/social-network/profile'/>


                    <Route render={() => <DialogsContainer/>} path='/social-network/dialogs'/>


                    <Route render={() => <NewsContainer/>} path='/social-network/feed'/>


                    <Route render={() => <Music/>} path='/social-network/audio'/>


                    <Route render={() => <Settings/>} path='/social-network/settings'/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
