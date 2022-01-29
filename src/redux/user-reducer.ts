import {ActionsType} from './redux-store'


export type UserType = {
    id: number
    followed: boolean
    photos: {
        small: string|null
        large: string|null
    }
    name: string
    status: string
}

export type UserPageType = {
    users: UserType[]
}

let initialState: UserPageType = {
    users: [
        {
            id: 1,
            status: 'I am a tasya\'s kent, and childhood best friend)',
            followed: false,
            name: 'Rakhat Sovet',
            photos: {
                small: null,
                large: null
            }
        },
        {
            id: 2,
            status: 'I am a tasya\'s kent, and childhood best friend)',
            followed: false,
            name: 'Ermekov Sanjar',
            photos: {
                small: null,
                large: null
            }
        },
        {
            id: 3,
            status: 'I am a tasya\'s kent, and childhood best friend)',
            followed: false,
            name: 'Bekzat Sultan',
            photos: {
                small: null,
                large: null
            }
        },
        {
            id: 4,
            status: 'I am a tasya\'s kent, and childhood best friend)',
            followed: false,
            name: 'Baimusin Danial',
            photos: {
                small: null,
                large: null
            }
        },
        // {
        //     id: 2,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Ermekov Sanjar',
        //     country: 'Kazakhstan',
        //     city: 'Nur-sultan',
        //     background: '#66bf3c',
        //     age: 16
        // },
        // {
        //     id: 3,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Bekzat Sultan',
        //     country: 'Kazakhstan',
        //     city: 'Almaty',
        //     background: 'chartreuse',
        //     age: 17
        // },
        // {
        //     id: 4,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Gabdullin Adilbek',
        //     country: 'Kazakhstan',
        //     city: 'Almaty',
        //     background: 'mediumvioletred',
        //     age: 16
        // },
        // {
        //     id: 5,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Kakimzhan Dias',
        //     country: 'Kazakhstan',
        //     city: 'Almaty',
        //     background: 'orangered',
        //     age: 17
        // },
        // {
        //     id: 6,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Baimusin Danial',
        //     country: 'Kazakhstan',
        //     city: 'Almaty',
        //     background: 'brown',
        //     age: 17
        // },
        // {
        //     id: 7,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Kurkebaev Sanjar',
        //     country: 'Kazakhstan',
        //     city: 'Nur-Sultan',
        //     background: 'aqua',
        //     age: 16
        // },
        // {
        //     id: 8,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Egor Mazur',
        //     country: 'Kazakhstan',
        //     city: 'Pavlodar',
        //     background: 'indigo',
        //     age: 17
        // },
        // {
        //     id: 9,
        //     imageSRC: s,
        //     status: 'I am a tasya\'s kent)',
        //     followed: false,
        //     fullName: 'Kapken Dariga',
        //     country: 'Kazakhstan',
        //     city: 'Almaty',
        //     background: 'black',
        //     age: 17
        // },
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
