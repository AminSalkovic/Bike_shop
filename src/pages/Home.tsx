import { Link } from 'react-router-dom'
import { Container,Carousel } from 'react-bootstrap'
import carouselData from '../data/carousel.json'
import Store from './Store'
import Navbar2 from '../components/Navbar2'
const Home = () => {
  return (
    <>
    <Container>
        <Carousel variant='dark'>
          {carouselData.map((item)=>{
            return (
              <Carousel.Item key={item.id} interval={1500}>
                        <img style={{width:'100%',height:'520px',objectFit:'contain'}}
                        src={item.imgUrl}/>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <Navbar2/>
        <Store/>
        <Container style={{width:"100%",height:'640px'}}>
          <Link to='/cx-bikes'>
              <img src='/imgs/section2.jpg' style={{width:'100%',height:"100%",objectFit:"contain"}}/>
          </Link>
        </Container>
    </Container>
  </>
  )
}

export default Home