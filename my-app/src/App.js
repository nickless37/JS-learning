import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import myPhoto from './images/template1.png';
import Frontend from './images/frontend.png';
import Backend from './images/backend.png';
import Java from './images/java.png';
import Python from './images/python.png'

function App() {
  return (
    <div className="App min-vh-100 bg-dark text-light">
      <header className="App-header">
        <h1>Резюме</h1>
        <Form className='d-flex justify-content-end pe-5'>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="theme"
          />
        </Form>
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
              className="img-size-custom"
              src={Frontend} 
              alt="Frontend"

            />
            <Carousel.Caption className='bg-dark text-light bg-opacity-75 p-3 rounded labelBackground'>
              <h3>Frontend</h3>
              <p>HTML, CSS</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img 
              className="img-size-custom"
              src={Backend} 
              alt="Backend"

            />
            <Carousel.Caption className='bg-light text-dark bg-opacity-75 p-3 rounded labelBackground'>
              <h3>Backend</h3>
              <p>Java script</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img 
              className="img-size-custom"
              src={Java} 
              alt="Java"

            />
            <Carousel.Caption className='bg-light text-dark bg-opacity-75 p-3 rounded labelBackground' >
              <h3>Java</h3>
              <p>Java applications</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img 
              className="img-size-custom"
              src={Python} 
              alt="Python"

            />
            <Carousel.Caption className='bg-light text-dark bg-opacity-75 p-3 rounded labelBackground'>
              <h3>Python</h3>
              <p>Python applications</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;