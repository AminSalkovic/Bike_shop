import { NavLink } from 'react-router-dom'
import { Container,Carousel,Nav,Navbar} from 'react-bootstrap'
import carouselData from '../data/carousel.json'
import Store from './Store'
import Navbar2 from '../components/Navbar2'
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
        <Navbar2/>
        <Store/>
    </Container>
  </>
  )
}

export default Home