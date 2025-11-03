import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Dropdown, Carousel } from 'react-bootstrap';

// foto
import myPhoto from './images/template1.png';
import Frontend from './images/frontend.png';
import Backend from './images/backend.png';
import Java from './images/java.png';
import Python from './images/python.png'
// import DebagTexture from './images/Debag Texture.png'

//apps
import AutocadLogo from './images/app logos/AutoCAD-logo.jpg'
import FigmaLogo from './images/app logos/figma.png'
import StarUMLLogo from './images/app logos/staruml.png'
import CPTLogo from './images/app logos/CPT.png'
import MOLogo from './images/app logos/MOffice.png'
import WPSLogo from './images/app logos/WPSO.png'


//кастомный компонент на основі картки з bootstrap
function AppExpirience({name, description, logo, darkMode}){
  const cardStyle = {
    width: '14rem',
    borderRadius: '1rem',
    transition: 'background-color 0.3s, color 0.3s',
    backgroundColor: darkMode ? '#2c2f33' : '#e4e8ed',  // контрасніші кольори
    color: darkMode ? '#f1f1f1' : '#222',               
    boxShadow: darkMode
      ? '0 0 10px rgba(255,255,255,0.1)'
      : '0 0 10px rgba(0,0,0,0.15)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#000000',
  };

  const textStyle = {
    fontSize: '0.9rem',
    color: darkMode ? '#cccccc' : '#333333', 
  };


  return (
    <div className="card text-center m-3" style={cardStyle}>
    <img
      src={logo}
      className="card-img-top p-3"
      alt={name}
      style={{
        objectFit: 'contain',
        height: 80,
        filter: darkMode ? 'brightness(0.9)' : 'none',
      }}
    />
    <div className="card-body">
      <h5 className="card-title" style={titleStyle}>
        {name}
      </h5>
      <p className="card-text" style={textStyle}>
        {description}
      </p>
    </div>
  </div>
  );
}



function App() {
  //створення кнопки зміни теми як у минулій роботі 
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
    }
    
    applyTheme(savedTheme === 'true');
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add('bg-dark', 'dark-mode');
      document.body.classList.remove('bg-light');
    } else {
      document.body.classList.add('bg-light');
      document.body.classList.remove('bg-dark', 'dark-mode');
    }
  };

  const changeTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    applyTheme(newDarkMode);
  };

  const getThemeClasses = (baseClass = '') => {
    if (darkMode) {
      return `${baseClass} bg-dark text-light`;
    } else {
      return `${baseClass} bg-light text-dark`;
    }
  };

  return (
    <div className="App">
      <Navbar expand="lg" className={getThemeClasses(darkMode ? 'navbar-dark' : 'navbar-light')} fixed="top"> 
        <Container className='flex-column direction-colomn justify-self-center-custom '>
        {/* <Navbar.Brand href="#resume" id='resume'>Резюме</Navbar.Brand> */}

        {/* Навігація */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="#" >Резюме</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">Про мене</Nav.Link>
            <Nav.Link href="#works">Мої роботи</Nav.Link>
            <Nav.Link href="#instruments">Інструментарій</Nav.Link>

          </Nav>
          
          <Nav className= "ms-auto ps-4 pe-3" >
            <Dropdown className='custom-dropdown'>
              <Dropdown.Toggle className={getThemeClasses('ps-4 pe-3')} >
                Нинішні проєкти
              </Dropdown.Toggle>

              <Dropdown.Menu className={`${getThemeClasses()} ${darkMode ? 'dropdown-dark' : 'dropdown-light'}`}>
                <Dropdown.Item href="https://github.com/nickless37/JS-learning" className={getThemeClasses(darkMode ? 'dropdown-dark' : 'dropdown-light')}>Java script</Dropdown.Item>
                <Dropdown.Item href="https://github.com/nickless37/cryptographic-methods-of-information-protection-2025" className={getThemeClasses(darkMode ? 'dropdown-dark' : 'dropdown-light')}>Phython</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Nav className="ms-auto">
            <Button 
              className=''
              id="BG_Change"
              variant={darkMode ? "outline-light" : "outline-dark"}
              onClick={changeTheme}
            >
              {darkMode ? 'Dark' : 'Light'}
            </Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container id='test' className="mt-4" >
        <div id='about' className={getThemeClasses('about_me d-flex justify-content-center ms-5 me-5 mt-5 p-4 rounded')}>
          <img 
            src={myPhoto} 
            className={`img-thumbnail ${darkMode ? 'border-secondary' : ''}`}
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
        
        <div id='works' className={getThemeClasses('mt-5 p-3 rounded')}>
          <h2>Мої роботи</h2>
          <Carousel>
            <Carousel.Item>
              <img 
                className="img-size-custom"
                src={Frontend} 
                alt="Frontend"
              />
              <Carousel.Caption className='bg-opacity-75 p-3 rounded labelBackground justify-self-center-custom'>
                <h3>Frontend </h3>
                <p>HTML, CSS</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img 
                className="img-size-custom"
                src={Backend} 
                alt="Backend"
              />
              <Carousel.Caption className='bg-opacity-75 p-3 rounded labelBackground justify-self-center-custom'>
                <h3>Backend </h3>
                <p>JS</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img 
                className="img-size-custom"
                src={Java} 
                alt="Java"
              />
              <Carousel.Caption className='bg-opacity-75 p-3 rounded labelBackground justify-self-center-custom' >
                <h3>Java</h3>
                <p>Java projects</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img 
                className="img-size-custom"
                src={Python} 
                alt="Python"
              />
              <Carousel.Caption className='bg-opacity-75 p-3 rounded labelBackground justify-self-center-custom' >
                <h3>Python</h3>
                <p>Python projects</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div id='instruments'>
          <h2 className={getThemeClasses('mt-5 mb-5')}>Маю досвід у інструментах</h2>
          <div className="d-flex flex-wrap justify-content-start">
            <AppExpirience
              name="Autocad"
              description="Програма для проектування схем деталей"
              logo={AutocadLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
            <AppExpirience
              name="Figma"
              description="Інструмент для фронтенд проектування "
              logo={FigmaLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
            <AppExpirience
              name="StarUML"
              description="Інструмент для створення схем та діаграм"
              logo={StarUMLLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
            <AppExpirience
              name="Cisco Packet Tracer"
              description="Інструмент для побудови схем комп'ютерних мереж"
              logo={CPTLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
            <AppExpirience
              name="Microsoft office"
              description="Пакет програм різноманітного призначення"
              logo={MOLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
            <AppExpirience
              name="WPS offic"
              description="Пакет програм різноманітного призначення"
              logo={WPSLogo}
              // !
              // logo={DebagTexture}
              darkMode={darkMode}  
            />
          </div>
        </div>
      </Container>


    </div>




  );
}

export default App;