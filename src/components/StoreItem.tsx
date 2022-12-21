
import { Button, Card, Container,} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppigCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export function StoreItem({id,name,price,imgUrl}:StoreItemProps){
     const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}=useShoppingCart()

     const quantity= getItemQuantity(id)

   return( 
   <Card className='h-100'>
     <Card.Img variant='top' 
      src={imgUrl} 
      style={{height:"200px",objectFit:'cover'}}
      /> 
        <Card.Body className='d-flex flex-column'>
           <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
             <Container className='fs-2'>{name}</Container>
             <Container className='ms-2 text-muted'>{formatCurrency(price)}</Container>
           </Card.Title>
           <div className="mt-auto">
              {quantity === 0 ? <Button onClick={()=>increaseCartQuantity(id)} className='w-100'>+ Add To Card </Button> : <Container className='d-flex 
               align-items-center flex-column' style={{gap:".5rem"}}>
                  
                    <Container className='d-flex align-items-center justify-content-center' style={{gap:".5rem"}} >
                        <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                            <Container>
                                <Container>{quantity} in cart</Container>
                            </Container>
                        <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </Container>
                       <Button  onClick={()=> removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
                    </Container>
              }
           </div>
        </Card.Body>
    </Card>

   )
}