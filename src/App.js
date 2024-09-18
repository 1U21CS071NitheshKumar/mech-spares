import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Navbarpage from './component/Navbarpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Admin from './component/Admin';
import Mechshop from './component/Mechshop';
import Sparesshop from './component/Sparesshop';
import Addnewmech from './component/Addnewmech';
import Addnewspares from './component/Addnewspares';
import Sparespart from './component/Sparespart';
import { createContext, useState } from 'react';
import Mechview from './component/Mechview';
import Sparesview from './component/Sparesview';
import Signup from './component/Singup';

function App() {

  return (
    <>

    {/* <Signup/> */}

        <Router>
        <Navbarpage/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Mechshop' element={<Mechshop/>} />
            <Route path='/Sparespart' element={<Sparespart/>} />
            <Route path='/Mechview/:id' element={<Mechview/>} />
            <Route path='/Sparesview/:id' element={<Sparesview/>} />

          </Routes>
        </Router>
    

      {/* <Router>
        <Admin />
        <Routes>
          <Route path='/Mechshop' element={<Mechshop />} />
          <Route path='/Addnewmech' element={<Addnewmech/>} />
          <Route path='/Sparesshop' element={<Sparesshop />} />
          <Route path='/Addnewspares' element={<Addnewspares/>} />
        </Routes>
      </Router> */}


    </>
  )
}

export default App;
