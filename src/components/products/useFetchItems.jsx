import axios from 'axios'
import { fetchItems } from '../../redux/actions/fetchItemsAction'
import { useDispatch } from 'react-redux'
// Is useless after using redux-thunks
function useFetchItems (URL) {
  const dispatch = useDispatch()

  const fetch = async () => {
    const response = await axios
      .get(URL)
      .then(res => res.data)

    dispatch(fetchItems(response))
  }
  return fetch
}

export default useFetchItems
