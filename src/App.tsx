import React from 'react';
import './App.scss';
import {RootStateType} from './redux/state';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

//types
type AppPropsType = {
    state: RootStateType
    changePosts: (src: 1 | 2) => void
    changeInput: (text: string) => void
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header title={'Social Network'}/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={() =><Profile changeInput={props.changeInput} addPost={props.changePosts} state={props.state.profilePage}/>} path='/social-network/profile'/>


                    <Route render={() => <Dialogs state={props.state.dialogsPage}/>} path='/social-network/dialogs'/>



                    <Route render={() => <Music/>} path='/social-network/audio'/>



                    <Route render={() => <News/>} path='/social-network/feed'/>



                    <Route render={() => <Settings/>} path='/social-network/settings'/>



                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
