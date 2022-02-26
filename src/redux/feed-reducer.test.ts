import {addFeedPostAC, feedReducer, NewsPageType} from './feed-reducer';
import {secondSrc} from './profile-reducer';
test('dialog reducer should send correct message', () => {
    const startState: NewsPageType = {
        userInfo: {
            imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            name: 'Temirtas',
            surname: 'Nursain',
            eMail: 'dalionfull@gmail.com'
        },
        feedPosts: [
            {id: 1, src: secondSrc, message: 'LALALA'}
        ],
    }
    let newFeedPostText = 'JoJOJO'
    const endState = feedReducer(startState, addFeedPostAC(newFeedPostText))
    expect(endState.feedPosts.length).toBe(2)
    expect(endState.feedPosts[1].message).toBe(newFeedPostText)
})