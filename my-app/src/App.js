import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import myPhoto from './images/template1.png';
import Carousel from 'react-bootstrap/Carousel';
import Frontend from './images/frontend.png'
import Backend from './images/backend.png'
import Java from './images/java.png'
// import Python from './images/python.png'



function App() {
  return (
    <div className="App min-vh-100 bg-dark text-light">
      <header className="App-header" >
        <h1>
          Резюме
        </h1>
        <div className='about_me d-flex justify-content-center  ms-5 me-5 mt-5'>
          <img src={myPhoto} className='img-thumbnail ' alt="error" width={210} height={300}   style={{objectFit: "cover",}}/>
          <div id='B1' className='d-flex align-self-center flex-column direction-colomn justify-self-center-custom'>
            <p>Навчаюся у ДТЕУ</p>
            <p>Факультет Інформаційних Технологій</p>
            <p>3 курс 13 група</p>
          </div>
        </div>
      </header>
      <div id='my works' className='mt-5'>
        <h2>Мої роботи</h2>
        <Carousel>
          <Carousel.Item>
            <img className="img-size-custom" src={Frontend} alt="Frontend"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-size-custom" src={Backend} alt="Backend"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-size-custom" src={Java} alt="Java"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



      </div>
      
    </div>
  );
}

export default App;
