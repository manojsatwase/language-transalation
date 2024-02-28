import { useEffect, useState } from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCallAPI from '../../customHook/useCallAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage } from '../../redux/selectedLanguageSlice';
import CustomIcon from './CustomTitle';

import './Header.css';

const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const { getLanguages } = useCallAPI(); // Call the useCallAPI hook

    const langs = useSelector(state=>state.languages.langs);
    const dispatch = useDispatch();

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language)
      };
    
  // useEffect to call getLanguages when component mounts
  useEffect(() => {
    getLanguages();
  }, []);
  
  useEffect(()=>{
      dispatch(addLanguage(selectedLanguage));
  },[selectedLanguage])

  return (
    <Navbar expand="lg" bg="primary" variant='dark' className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to="/">LT</Link>
      </Navbar.Brand>
      <Link  to="/dashboard">
         Dashboard
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="m-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
          <NavDropdown title={<CustomIcon/>} id="navbarScrollingDropdown">
            {
                langs?.map(lang=>(
                  <NavDropdown.Item key={lang.lang_name} onClick={()=>handleLanguageChange(lang.lang_value)}>
                        {lang.lang_name}
                   </NavDropdown.Item>
                ))
            }
          </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header