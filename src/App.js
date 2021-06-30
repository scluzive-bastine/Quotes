import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import QuoteIcon1 from './QuoteIcon1'
import QuoteIcon2 from './QuoteIcon2'

import Footer from './Footer'
import Nav from './Nav'
import Quote from './Quote'
function App() {
  const BASE_URL = 'http://staging.quotable.io/'

  const [quote, setQuote] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const randomQuote = async () => {
    try {
      const response = await fetch(BASE_URL + 'random')
      const quote = await response.json()
      setQuote(quote)
      setisLoading(false)
    } catch (error) {
      setisLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    setisLoading(true)
    randomQuote()
  }, [])
  if (isLoading) {
    return (
      <Container fluid className='pl-0 pr-0 h-100'>
        <Nav />
        <h1 className='text-center mt-5'>Random Quotes</h1>
        <Container
          className='align-items-center d-flex justify-content-center w-100'
          style={{ marginTop: '8rem' }}
        >
          <h1 className='text-center'>Loading...</h1>
        </Container>
        <Footer />
      </Container>
    )
  }
  return (
    <Container fluid className='pl-0 pr-0 h-100'>
      <Nav />
      <h1 className='text-center mt-5'>Random Quotes</h1>
      <Container
        className='align-items-center d-flex justify-content-center w-100'
        style={{ marginTop: '8rem' }}
      >
        <Row className='justify-content-center w-100'>
          <Col md={8}>
            <QuoteIcon1 />
            <Quote quote={quote} />
            <QuoteIcon2 />
            <div className='d-flex justify-content-center'>
              <Button
                variant='primary'
                className='mt-4'
                style={{ backgroundColor: '#282E67', borderColor: '#282E67' }}
                onClick={() => randomQuote()}
              >
                New Quote
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}

export default App
