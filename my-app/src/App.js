import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import myPhoto from './images/template1.png';
import Frontend from './images/frontend.png';
import Backend from './images/backend.png';
import Java from './images/java.png';

function App() {
  return (
    <div className="App min-vh-100 bg-dark text-light">
      <header className="App-header">
        <h1>Резюме</h1>
        <div className='about_me d-flex justify-content-center ms-5 me-5 mt-5'>
          <img 
            src={myPhoto} 
            className='img-thumbnail' 
            alt="error" 
            width={210} 
            height={300}   
            style={{objectFit: "cover"}}
          />
          <div id='B1' className='d-flex align-self-center flex-column direction-colomn justify-self-center-custom'>
            <p>Навчаюся у ДТЕУ</p>
            <p>Факультет Інформаційних Технологій</p>
            <p>3 курс 13 група</p>
          </div>
        </div>
      </header>
      
      <div id='my works' className='mt-5 container'>
        <h2>Мої роботи</h2>
        
        <Carousel>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Frontend} 
              alt="Frontend"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Frontend Development</h3>
              <p>HTML, CSS, JavaScript projects</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Backend} 
              alt="Backend"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Backend Development</h3>
              <p>Server-side applications</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Java} 
              alt="Java"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Java Projects</h3>
              <p>Java applications and systems</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;