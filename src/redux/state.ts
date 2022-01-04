import {ProfilePageType, profileReducer} from './profile-reducer';
import {DialogsPageType, dialogsReducer} from './dialogs-reducer';
import {feedReducer, NewsPageType} from './feed-reducer';
import {ActionsType} from './redux-store';

export let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
export let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';
/*------STATE TYPE------*/



/*-------main------*/
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    newsPage: NewsPageType
}
/*------STATE TYPE------*/

/*------------STORE TYPE------------*/type StoreType = {
    _state: RootStateType
    _callbackSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
/*------------STORE TYPE------------*/
/*--actions type--*/

/*--actions type--*/
/*---------------------------STORE---------------------------*/
const store: StoreType = {
    _state: {
        profilePage: {
            userInfo: {
                imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                name: 'Temirtas',
                surname: 'Nursain',
                eMail: 'dalionfull@gmail.com'
            },
            post: [
                {id: 1, src: secondSrc, message: 'That is my wall?'},

            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: '@Tasya', name: 'Tasya'},
                {id: '@Alex', name: 'Alex'},
                {id: '@Fox', name: 'Fox'},
                {id: '@Drill', name: 'Drill'},
                {id: '@Genius', name: 'Genius'},
                {id: '@Uncle', name: 'Uncle'},
                {id: '@GQtpe', name: 'GQtpe'},
                {id: '@Alina', name: 'Alina'},
            ],
            messages: [
                {id: 1, sent: true, message: 'Hi!'},
                {id: 2, sent: false, message: 'Hi!'},
                {id: 3, sent: true, message: 'How do you feel'},
                {id: 4, sent: false, message: 'I feel Incredibly good'},
                {id: 5, sent: true, message: 'Ok, bye'},
                {id: 6, sent: false, message: 'Bye'},
            ],
            newMessageText: '',
            error: null,
        },
        newsPage: {
            userInfo: {
                imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                name: 'Temirtas',
                surname: 'Nursain',
                eMail: 'dalionfull@gmail.com'
            },
            feedStories: [],
            feedNewPostText: '',
            feedPosts: [
                {id: 1, src: secondSrc, message: 'LALALA'}
            ],
        }
    },
    getState() {
        return this._state
    },
    _callbackSubscriber(state: RootStateType) {
        console.log(`App rendering... ${state}`)
    },
    subscribe(observer: () => void) {
        this._callbackSubscriber = observer
    },
    dispatch(action) { //{type: string, args..}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.newsPage = feedReducer(this._state.newsPage, action)
        this._callbackSubscriber(this._state)






    }
}
console.log(store)
/*---------------------------STORE---------------------------*/