import { usersActionTypes } from "../actionTypes/usersActionTypes"

const initialState = {
    fetched: false,
    items: []
}

export const itemReducer = (state=initialState, action) => {
    switch(action.type) {
        case usersActionTypes.FETCH_ITEMS:
            return{
                fetched: true,
                items: action.payload
            }
        default:
            return state
    }
}