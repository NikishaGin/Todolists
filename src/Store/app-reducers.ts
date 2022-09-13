


type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}




export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type setErrorType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR' , error} as const)

export type setStatusType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS' , status} as const)

type ActionsType = setErrorType | setStatusType

