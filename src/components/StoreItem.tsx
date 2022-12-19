import {Card,Container,Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppigCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemsProps={
    id:number,
    path:string,
    imgUrl:string,
    name:string
    price:number
}

const StoreItem = ({id,path,imgUrl,name,price}:StoreItemsProps) => {
   
    const {increaseCartQuantity,decreaseCartQuantity,getItemQuantity,removeFromCart}=useShoppingCart()
    
    const quantity=getItemQuantity(id)
    
  return (
   <>
         <Card className='h-100'>
             <Card.Img variant='top' 
                 src={imgUrl} 
                 style={{height:"220px",objectFit:'none'}}
             /> 
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                    <Container className='fs-2'>{name}</Container>
                    <Container className='ms-2 text-muted'>{formatCurrency(price)}</Container>
                </Card.Title>
           <div className="mt-auto">
             {quantity === 0 ? 
             <Button variant='secondary' onClick={()=>increaseCartQuantity(id)} className='w-100'>+ Add To Card </Button> : <Container className='d-flex  
             align-items-center flex-column' style={{gap:".5rem"}}>
                    <Container className='d-flex align-items-center justify-content-center' style={{gap:".5rem"}} >
                        <Button variant='dark' onClick={()=>decreaseCartQuantity(id)}>-</Button>
                           <Container>{quantity} in cart</Container> 
                        <Button variant='dark' onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </Container>
                       <Button  onClick={()=> removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
                    </Container>
               } 
           </div>
          </Card.Body>
      </Card>
            
   </>
  )
}

export default StoreItem