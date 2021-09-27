import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { clearCart } from '../../redux/actions/selectedItemsAction'
import DollarIcon from '../icons/DollarIcon'

function ConfirmPurchase () {
  const dispatch = useDispatch()
  const history = useHistory()
  const { selectedItems, totalPrice } = useSelector(state => state.selectedItemReducer)

  if (selectedItems.length < 1) history.push('/')

  const returnToHome = () => {
    history.push('/')
  }

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100'>
        <div className='w-full sm:w-9/12 m-auto py-0 sm:py-16 min-h-screen flex items-center justify-center'>
          <div className='bg-green-400 shadow overflow-hidden sm:rounded-lg pb-8'>
            <div className='border-t border-gray-200 text-center pt-8'>
              <h1 className='text-4xl font-bold text-white'>Successful !</h1>
              <h1 className='text-2xl font-medium py-8 px-12 text-white'>
                We will contact you as soon as the product become ready!{' '}
              </h1>

              <div>
                <div className="full bg-white mx-6 text-2xl py-2">Product Summary</div>
                <table className='border-separate table-fixed w-full px-5 text-xs sm:text-base'>
                  <thead>
                    <tr className='bg-green-50'>
                      <th className='py-2 w-8/12'>Product</th>
                      <th className='w-2/12'>Quantity</th>
                      <th className='w-2/12'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems &&
                      selectedItems.map(({ title, price, count }) => {
                        return (
                          <tr key={title} className='bg-green-50'>
                            <td>{title}</td>
                            <td>{count}</td>
                            <td>{price}</td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
                <div className="full bg-white mx-6 text-xl py-1 mb-5 flex px-5">Total Cost &nbsp; &nbsp; <div className='mt-1'> <DollarIcon />  </div>{totalPrice}</div>
              </div>

              <button
                className='bg-gradient-to-r from-purple-400 to-blue-500 
              hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3
               rounded-md mr-6'
                onClick={() => {
                    dispatch(clearCart())
                    returnToHome()
                }}
              >
                HOME
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ConfirmPurchase
