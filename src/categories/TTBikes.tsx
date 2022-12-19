import React from 'react'
import Navbar2 from '../components/Navbar2'
import storeItems from '../data/ttBikes.json'
import StoreItem from '../components/StoreItem'

import { Col,Container,Row} from 'react-bootstrap'
const TTBikes = () => {
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

export default TTBikes