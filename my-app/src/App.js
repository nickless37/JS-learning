import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import myPhoto from './images/template1.png';
import Frontend from './images/frontend.png';
import Backend from './images/backend.png';
import Java from './images/java.png';
import DebagTexture from './images/Debag Texture.png'


//кастомный компонент на основі картки з bootstrap
function AppExpirience({name, description, logo, darkMode}){
  const classes = `card text-center m-3  ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} bg-invert`;


  return (
    <div className={classes} style={{ width: '14rem' }}>
      <img src={logo} className="card-img-top p-3" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{description}</p>
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
      <Navbar expand="lg" className={getThemeClasses(darkMode ? 'navbar-dark' : 'navbar-light')}> 
        <Container className='flex-column direction-colomn justify-self-center-custom '>
          <Navbar.Brand href="#" id='resume'>Резюме</Navbar.Brand>
          <Nav className="ms-auto">
            <Button 
              id="BG_Change"
              variant={darkMode ? "outline-light" : "outline-dark"}
              onClick={changeTheme}
            >
              {darkMode ? 'Dark' : 'Light'}
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <div className={getThemeClasses('about_me d-flex justify-content-center ms-5 me-5 mt-5 p-4 rounded')}>
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
        
        <div className={getThemeClasses('mt-5 p-3 rounded')}>
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
          </Carousel>
        </div>
      </Container>

      <div>
        <h2 className={getThemeClasses('mt-5 mb-5')}>Маю досвід у інструментах</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <AppExpirience
            name="Autocad"
            description="Програма для проектування схем деталей"
            // logo={AutocadLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
          <AppExpirience
            name="Figma"
            description="Інструмент для фронтенд проектування "
            // logo={FigmaLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
          <AppExpirience
            name="StarUML"
            description="Інструмент для створення схем та діаграм"
            // logo={StarUMLLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
          <AppExpirience
            name="Cisco Packet Tracer"
            description="Інструмент для побудови схем комп'ютерних мереж"
            // logo={CPTLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
          <AppExpirience
            name="Microsoft office"
            description="Пакет програм різноманітного призначення"
            // logo={MOLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
          <AppExpirience
            name="WPS offic"
            description="Пакет програм різноманітного призначення"
            // logo={WPSLogo}
            // !
            logo={DebagTexture}
            darkMode={darkMode}  
          />
        </div>
      </div>




    </div>




  );
}

export default App;