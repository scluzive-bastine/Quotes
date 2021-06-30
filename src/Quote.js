import React from 'react'

const Quote = ({ quote }) => {
  return (
    <>
      <div className='rounded p-5 shadow bg-white w-100'>
        <p>{quote.content}</p>
        <h6 className='author'>{quote.author}</h6>
      </div>
    </>
  )
}

export default Quote
