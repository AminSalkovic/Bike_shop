import { Container,Col,Row } from 'react-bootstrap'
import Navbar2 from '../components/Navbar2'
import {StoreItem}from '../components/StoreItem'
import storeItems from '../data/cxBikes.json'

const CxBikes = () => {
  return (
    <>
    <Navbar2/>
    <Container>
      <Row md={2} xs={1} lg={3} className='g-3'>
            {storeItems.map((item)=>
                <Col key={item.id}>
                    <StoreItem {...item}/>
                 </Col> 
            )}
        </Row>
    </Container>
    </>
  )
}

export default CxBikes