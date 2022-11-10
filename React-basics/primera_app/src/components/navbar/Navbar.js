import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';


function Navbar(){
    return(
        <div>
            <nav className='nav'>
            <Link to="/" className='nav-item'>Homepage</Link>
            <Link to="/about-me" className='nav-item'>About me</Link>
            <Link to="/contact" className='nav-item'>Contact</Link>
        </nav>
        <Routes>
            <Route path='/' element={ <Homepage /> } />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
        </div>
    )
}
export default Navbar;