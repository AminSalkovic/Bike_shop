import { Col ,Row ,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import storeItems from '../data/store.json'

const Store = () => {
  return (
    <>
    <Row md={2} xs={1} lg={3} className='g-3' style={{marginTop:'10px'}}>
       {storeItems.map((item)=>
          <Col key={item.id}>
               <Link to={item.path} style={{textDecoration:"none"}}>
                    <Card className='h-100'>
                        <Card.Img variant='top' 
                        src={item.imgUrl} 
                        style={{height:"200px",objectFit:'cover'}}
                    /> 
                    
                       <h1 className='fs-2' style={{textAlign:'center',color:'gray'}}>{item.name}</h1>
                    </Card>
               </Link>
          </Col>
       )}
    </Row>
    </>
  )
}

export default Store