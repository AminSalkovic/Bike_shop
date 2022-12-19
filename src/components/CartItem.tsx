import React from 'react'
import { Stack,Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppigCartContext'
import storeItems from '../data/roadBikes.json'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps={
  id:number,
  quantity:number
}

const CartItem = ({id,quantity}:CartItemProps) => {
 
  const {removeFromCart}=useShoppingCart()

 const item = storeItems.find(i=> i.id ===id)

 if(item==null) return null

  return (
    <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
      <img src={item.imgUrl} style={{width:'125px',height:"75px",objectFit:'cover'}}/>
       <div className="me-auto">
         <div>
            {item.name}{' '}
            <span className="text-muted" style={{fontSize:".65rem"}}>{quantity}x</span>
         </div>
         <div className='text-muted' style={{fontSize:'.75rem'}}>
         {formatCurrency(item.price)}
         </div>
       </div>
       <div>
       {formatCurrency(item.price*quantity)}
       </div> 
       <Button onClick={()=>removeFromCart(id)} variant="outline-danger" size="sm">
           &times;
       </Button>
    </Stack>
  )
}

export default CartItem