import React from 'react'

const Quote = ({ quote }) => {
  const { content, author, tags } = quote
  return (
    <>
      <div className='rounded p-5 shadow bg-white w-100'>
        <p>{content}</p>
        <h6 className='author'>{author}</h6>
        <h6 className='text-muted text-uppercase' style={{ fontSize: '.7rem' }}>
          {tags
            ? tags.map((tag) => {
                return (
                  <small key={tag} className='mr-2 p-2 rounded'>
                    {tag}
                  </small>
                )
              })
            : '-'}
        </h6>
      </div>
    </>
  )
}

export default Quote
