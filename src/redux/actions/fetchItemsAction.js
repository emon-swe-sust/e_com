import axios from 'axios'
import {usersActionTypes} from '../actionTypes/usersActionTypes'

export const fetchItems = async (dispatch) => {    
    const response = await axios.get('https://fakestoreapi.com/products')
                            .then((res)=>res.data)
    dispatch({
        type:usersActionTypes.FETCH_ITEMS,
        payload: response
    })
}