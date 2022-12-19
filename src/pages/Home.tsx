import { NavLink } from 'react-router-dom'
import { Container,Carousel,Nav,Navbar} from 'react-bootstrap'
import carouselData from '../data/carousel.json'
import Store from './Store'
const Home = () => {
  return (
    <>
    <Container>
        <Carousel>
          {carouselData.map((item)=>{
              return (
                  <Carousel.Item key={item.id} interval={1500}>
                        <img style={{width:'100%',height:'520px',objectFit:'cover'}}
                        
                        src={item.imgUrl}/>
                    </Carousel.Item>
            )
        })}
        </Carousel>
        <Navbar bg="dark" variant="dark">
        <Container>
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
        </Container>
      </Navbar> 
                 <Store/>
    </Container>
  </>
  )
}

export default Home