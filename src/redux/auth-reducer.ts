export type InitialStateType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const SET_USER_DATA = "SET_USER_DATA";


export const setAuthUserData = (userId: string | null, email: string | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    } as const
}


const authReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state

    }
}

export default authReducer;