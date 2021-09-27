import { usersActionTypes } from '../actionTypes/usersActionTypes'

export const addSelectedItem = (newItem) => {
    return{
        type:usersActionTypes.ADD_TO_CART,
        payload:newItem
    }
}

export const updateSelectedItems = (id, currentItem) => {
    return{
        type:usersActionTypes.UPDATE_TO_CART,
        payload:{
            id,
            currentItem
        }
    }
}

export const deleteSelectedItem = (id) => {
    return{
        type:usersActionTypes.DELETE_FROM_CART,
        payload:id
    }
}

export const clearCart = () => {
    return{
        type:usersActionTypes.CLEAR_CART
    }
}

export const updateTotalPrice = (price) => {
    return{
        type:usersActionTypes.UPDATE_PRICE,
        payload:price
    }
}
