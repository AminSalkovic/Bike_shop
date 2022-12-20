import { Nav,Navbar,Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
const Navbar2 = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Nav className='me-auto'>
          <Nav.Link to='/road-bikes' as={NavLink}>
              ROAD BIKES
          </Nav.Link>
          <Nav.Link to='/mtb-bikes' as={NavLink}>
              MTB BIKES
          </Nav.Link>
          <Nav.Link to='/tt-bikes' as={NavLink}>
              TT BIKES
          </Nav.Link>
          <Nav.Link to='/cx-bikes' as={NavLink}>
              CX BIKES
          </Nav.Link>
          <Nav.Link to='/home-bikes' as={NavLink}>
               HOME BIKES
          </Nav.Link>
        </Nav>
  </Navbar> 
  )
}

export default Navbar2