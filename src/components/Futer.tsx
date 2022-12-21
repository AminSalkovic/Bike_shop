import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as BiIcons from 'react-icons/bi'
import { useShoppingCart } from "../context/ShoppigCartContext"
import storeItems from '../data/store.json'
const Futer = () => {

  const {scrollup}=useShoppingCart();
 
  const style={
    textDecoration:'none',
    color:'gray',
    fontSize:'20px'
  }
   
  return (
    <>
     <div style={{backgroundColor:"black",
     height:'80px',
     marginTop:'10px',
     display:'flex',
     justifyContent:'space-evenly',
     alignItems:'center',
     color:'gray'
     }}>
          <Link to='/' style={style}>
             Home
          </Link>
          <Link to='/store' style={style}> 
             Store
          </Link>
          <Link to='/contact' style={style}>
             Contact
          </Link>
          <Link to='/about' style={style}>
             About
          </Link>
          <Button variant="light" onClick={scrollup}>
                <BiIcons.BiArrowToTop/>
          </Button>
     </div>
     <div style={{backgroundColor:"black",
     height:'80px',
     display:'flex',
     justifyContent:'space-evenly',
     alignItems:'center',
     color:'gray'
     }}>
        {storeItems.map((el)=>
          <Link key={el.id} to={el.path} style={style}>
            {el.name}
          </Link>
        )}
     </div>
    </>
  )
}

export default Futer