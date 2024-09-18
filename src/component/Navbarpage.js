import React, { useState } from 'react'
import '../component/nav.css'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Navbarpage() {
  let [ismoblie, setismoblie] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='z'>
      <nav className='navbar'>
        <h3 className='logo'>MECH&SPARES</h3>
        <ul className={ismoblie ? 'nav-link-mob' : 'nav-link'}>
          <Link to='/' className='nav1'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='nav2'>
            <li>About</li>
          </Link>
          <Link to='/contact' className='nav3'>
            <li>Contact</li>
          </Link>
          
        </ul>
        <button className='nav5' onClick={() => setismoblie(!ismoblie)}>
          {ismoblie ? <h4><i class="bi bi-x-lg nav6" ></i></h4> : <h1><i class="bi bi-justify"></i></h1>}
        </button>


        <div className='icon-btn'>
          <button variant="primary" onClick={handleShow} className='icon-btn1' >
            <i className="bi bi-person-circle " ></i></button>

          <Modal show={show} onHide={handleClose} animation={false} >
            <Modal.Header closeButton>
              <Modal.Title>Loginpage</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="secondary" onClick={handleClose}>
                <i class="bi bi-door-closed-fill"></i>Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </nav>

    </div>
  )
}

export default Navbarpage