import {ActionsType} from './redux-store'
import s from '../img/JOJO.png'

export type UserType = {
    id: number
    followed: boolean
    imageSRC: string
    fullName: string
    status: string
    country: string
    city: string
}

export type UserPageType = {
    users: UserType[]
}

let initialState: UserPageType = {
    users: [
        {
            id: 1,
            imageSRC: s,
            status: 'I am a tasya\'s kent, and childhood best friend)',
            followed: false,
            fullName: 'Rakhat Sovet',
            country: 'Kazakhstan',
            city: 'Nur-sultan'
        },
        {
            id: 2,
            imageSRC: s,
            status: 'I am a tasya\'s kent)',
            followed: false,
            fullName: 'Ermekov Sanjar',
            country: 'Kazakhstan',
            city: 'Nur-sultan'
        },
        {
            id: 3,
            imageSRC: s,
            status: 'I am a tasya\'s kent)',
            followed: false,
            fullName: 'Bekzat Sultan',
            country: 'Kazakhstan',
            city: 'Almaty'
        },
        {
            id: 4,
            imageSRC: s,
            status: 'I am a tasya\'s kent)',
            followed: false,
            fullName: 'Gabdullin Adilbek',
            country: 'Kazakhstan',
            city: 'Almaty'
        },
        {
            id: 5,
            imageSRC: s,
            status: 'I am a tasya\'s kent)',
            followed: false,
            fullName: 'Kakimzhan Dias',
            country: 'Kazakhstan',
            city: 'Almaty'
        },
    ]
}

export const userReducer = (state: UserPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW':
            let curr = state.users.find(u => u.id === action.userID)
            if (curr) {
                curr.followed = !curr.followed
            }
            return {
                ...state,
            users: [...state.users]
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }


}
export let toggleFollowAC = (userID: number) => {
    return {
        type: 'TOGGLE-FOLLOW',
        userID: userID,
    } as const
}
export let setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
