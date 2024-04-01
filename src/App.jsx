import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Courses from './Pages/Home/Components/Courses/Courses';
import Pricing from './Pages/Home/Components/Pricing/Pricing';
import Course from './Pages/Course/Course';
import About from "./Pages/AboutUs/About"
import OurPricing from "./Pages/Pricing/OurPricing"
import Contact from "./Pages/Contact/Contact"
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<OurPricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App
