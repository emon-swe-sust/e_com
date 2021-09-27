import {usersActionTypes} from '../actionTypes/usersActionTypes'

export const fetchItems = (items) => {    
    return{
        type: usersActionTypes.FETCH_ITEMS,
        payload: items
    }
}