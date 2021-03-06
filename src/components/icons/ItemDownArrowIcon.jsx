import React from 'react'

function ItemDownArrowIcon () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-red-500
      hover:text-red-800'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function LargeItemDownArrowIcon () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-9 w-9 text-red-500
      hover:text-red-800'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default ItemDownArrowIcon
