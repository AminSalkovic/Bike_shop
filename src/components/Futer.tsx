import { Button } from "react-bootstrap"
import * as BiIcons from 'react-icons/bi'
import { useShoppingCart } from "../context/ShoppigCartContext"
const Futer = () => {

  const {scrollup}=useShoppingCart()
  return (
     <div style={{backgroundColor:"black",height:'200px',marginTop:'10px'}}>
          <Button onClick={scrollup}>
                <BiIcons.BiArrowToTop/>
          </Button>
     </div>
  )
}

export default Futer