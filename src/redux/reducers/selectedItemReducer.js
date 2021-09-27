import { usersActionTypes } from "../actionTypes/usersActionTypes";

const initialState = {
    totalPrice : 0,
    selectedItems : []
}

export const selectedItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersActionTypes.ADD_TO_CART:
            return{
                ...state,
                selectedItems:[...state.selectedItems,action.payload]
            };
        case usersActionTypes.UPDATE_TO_CART:
            const tempSelectedItems = state.selectedItems.map(item => {
                if(action.payload.id === item.id) return action.payload.currentItem
                else return item
            })
            return{
                ...state,
                selectedItems: tempSelectedItems
            }
        case usersActionTypes.DELETE_FROM_CART:
            return {
                ...state,
                selectedItems:state.selectedItems.filter(({id})=>id!==action.payload)
            };
        case usersActionTypes.UPDATE_PRICE:
            return{
                ...state,
                totalPrice: action.payload
            };
        case usersActionTypes.CLEAR_CART:
            return{
                ...state,
                selectedItems:[]
            }
        default:
            return state;
    }
}