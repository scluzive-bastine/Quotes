import React from 'react'

const Footer = () => {
  const developer = '<Tosh/>'
  return (
    <>
      <footer className='footer mt-auto py-3 bg-light'>
        <div className='container-fluid'>
          <h6 className='text-left' style={{ color: '#000' }}>
            Created by{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/scluzive-bastine'
              className='font-weight-bold text-decoration-none text-black'
              style={{ color: '#000' }}
            >
              {developer}
            </a>{' '}
          </h6>
        </div>
      </footer>
    </>
  )
}

export default Footer
