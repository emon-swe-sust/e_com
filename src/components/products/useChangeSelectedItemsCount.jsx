import { useDispatch, useSelector } from 'react-redux'
import {
  addSelectedItem,
  deleteSelectedItem,
  updateSelectedItems,
  updateTotalPrice
} from '../../redux/actions/selectedItemsAction'

function useChangeSelectedItems (idx) {
  const { selectedItems, totalPrice } = useSelector(
    state => state.selectedItemReducer
  )
  const { fetched, items } = useSelector(state => state.itemReducer)
  const dispatch = useDispatch()
  const itemList = fetched ? items : []

  const changeSelectedItemsCount = changedItemCount => {
    let currentItem = selectedItems && selectedItems.filter(({ id }) => id === idx)
    if (currentItem && currentItem.length > 0) {

      dispatch(
        updateTotalPrice(
          selectedItems
            .map(({ count, price, id }) => {
              if (id === idx) return price * changedItemCount
              else return price * count
            })
            .reduce((total, price) => total + price, 0)
        )
      )

      if (changedItemCount < 1) {
        dispatch(deleteSelectedItem(idx))
      } 
      else {
        currentItem = currentItem[0]
        currentItem = { ...currentItem, count: changedItemCount }
        dispatch(updateSelectedItems(idx, currentItem))
      }
    } else {
      
      currentItem = itemList.filter(({ id }) => id === idx)
      currentItem = currentItem[0]
      currentItem = { ...currentItem, count: changedItemCount }
      dispatch(updateTotalPrice(totalPrice+currentItem.price))
      dispatch(addSelectedItem(currentItem))
    }
  }
  return changeSelectedItemsCount
}
export default useChangeSelectedItems
