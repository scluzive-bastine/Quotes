import { Container, Row, Col, Button } from 'react-bootstrap'
import Nav from './Nav'
function App() {
  return (
    <Container fluid className='pl-0 pr-0 vh-100'>
      <Nav />
      <Container className='align-items-center d-flex h-100'>
        <Row className='justify-content-center'>
          <Col md={8}>
            <div className='rounded p-5 shadow bg-white'>
              <p>
                New Yorker–born and raised. Currently living in the Hague, the
                Netherlands after stints in Paris and Amsterdam. Lover of
                travel, adventure, nature, city, dresses, and cats.
              </p>
            </div>
            <div className='d-flex justify-content-center'>
              <Button
                variant='primary'
                className='mt-4'
                style={{ backgroundColor: '#282E67', borderColor: '#282E67' }}
              >
                New Quote
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
