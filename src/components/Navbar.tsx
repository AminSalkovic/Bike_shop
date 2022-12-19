import {Button, Container,Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppigCartContext'



function Navbar(){
     
    const{openCart,cartQuantity}=useShoppingCart()
     
   return(
       <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
               <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/road-bikes' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}>
                        Contact
                    </Nav.Link>
                    <Nav.Link to='/about-us' as={NavLink}>
                        About Us
                    </Nav.Link>
               </Nav>
               <Button variant='secondary' onClick={openCart}  style={{width:'3rem',height:"3rem",position:'relative'}} >
                  <AiIcons.AiOutlineShoppingCart/>
                     <Container className="rounded-circle bg-danger d-flex align-items-center justify-content-center"
                     style={{
                         position:"absolute",
                         bottom:'0',
                         right:'0',
                         width:'1.5rem',
                         height:'1.5rem',
                         transform:'translate(25%,25%)'}}
                         >
                        {cartQuantity}
                     </Container>
                </Button>
            </Container>
       </NavbarBs>
   )
}
export default Navbar