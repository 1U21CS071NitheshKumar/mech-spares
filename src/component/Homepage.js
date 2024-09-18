import React from 'react'
import { Button, Navbar, Container, Card, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/hom.css'
import { Link } from 'react-router-dom'
import spareslogo from '../images/spareslogo.png'
import mechlogo from '../images/mechlogo.png'
import fristimg from '../images/fristimg.jpg'
import img3 from '../images/img2.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import img10 from '../images/img10.png'
import img11 from '../images/img11.png'
import img12 from '../images/img12.gif'
import img13 from '../images/img13.png'
import img14 from '../images/img14.png'
import img15 from '../images/img15.png'
import img16 from '../images/img16.png'
import img17 from '../images/img17.png'
import img18 from '../images/img18.png'
import img19 from '../images/img19.png'
import img20 from '../images/img20.png'

function Homepage() {
  return (
    <>

    <div className='over-vision'>

    </div>


      <div className='z1'>
        <div className='wrapper'>
          <div className='image'>
            <img src={fristimg} />
            <div className='content'>
              <h1>A Certified Service,<br />Repair and Restore</h1>
              <p>Briefly describe your services, such as vehicle repair, maintenance, and spare<br /> parts availability.
                Include buttons or links for booking appointments,contacting<br />the shop, or browsing spare parts.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='main-p1'>
        <div className='c1'>
          <h1><img src={mechlogo} className='home2' />Car Repair</h1>
          <p>Mechanics study the principles of mechanics and forces in order to work in workshops on motors and vehicles. They test-drive cars and vehicles, ensuring they function properly. Their work involves addressing dynamic problems related to vehicle performance.</p>
          <button> <Link to='/Mechshop' className='p1-link'>Visit Now</Link></button>
        </div>
        <div className='c2'>
          <img src={img3} />
        </div>
      </div>

      <div className='main-p1'>
        <div className='c1'>
          <h1> <img src={spareslogo} className='home2' />Spare Parts</h1>
          <p>We offer high-quality spare parts for cars, bikes, and other motor vehicle accessories.
            Our products are available in stock level condition, and we provide detailed specifications and descriptions about the spares.</p>
          <button ><Link to='/Sparespart' className='p1-link'>Visit Now</Link></button>
        </div>
        <div className='c2'>
          <img src={img4} />
        </div>
      </div>

      <div>
        <p className='home3'>Skilled Mechanics Who Love Cars</p>
        <div className='home9'>
        <h1 className='home4'>Our Services</h1>
        </div>
      </div>


      <div className='home8'>
        <div className='main-p2'>
          <div className='child1'>
            < img src={img5} className='home5' />
            <h3>Brake Repair</h3>
            <p>Brake repair ensures your vehicle's safety by maintaining optimal braking performance.
              Regular inspections and timely repairs prevent potential accidents.</p>
          </div>

          <div className='child2'>
            < img src={img6} className='home6' />
            <h3>Oil & Filter Change</h3>
            <p>The engine oil is drained and replaced with fresh oil.
              The oil filter is replaced. The filter traps dirt, metal fragments,
              and contaminants that could damage the engine.</p>
          </div>
          <div className='child3'>
            < img src={img7} className='home7' />
            <h3>Suspension Repair</h3>
            <p>Suspension repair typically involves addressing issues with a vehicle's suspension system, which can include
              components like shocks, struts, and springs.</p>
          </div>
        </div>
      </div>
      <div className='home8'>
        <div className='main-p2'>
          <div className='child1'>
            < img src={img9} className='home5' />
            <h3>Hydraulics</h3>
            <p>Hydraulics are  widely used in  various types of a machinery and equipment dues
              to, their isability to generate large amounts of force in a controlled manner.
            </p>
          </div>

          <div className='child2'>
            < img src={img8} className='home6' />
            <h3>Body Repairs</h3>
            <p> refer to the process of restoring a vehicle exterior or structural components after damage.
              This can include fixing dents, scratches bumpers, and other exterior part.</p>
          </div>
          <div className='child3'>
            < img src={img10} className='home7' />
            <h3>Radiators & Water Pumps</h3>
            <p>The radiator is essential in a vehicle cooling system
               responsible for dissipat heat from the engine
               If the water pump fails the coolant wont circulate properly. </p>
          </div>
        </div>
      </div>


      <div className='main-p3'>
        <div>
        <img src={img11} className='home10'/>
        </div>
        <div className='childer1'>
          <h2>Working Hours</h2>
          <p><i class="bi bi-calendar-fill"></i> Monday – Friday: 7:30am – 5pm</p>
          <p><i class="bi bi-calendar-event"></i> Saturday: 7:30am – 5pm</p>
          <p><i class="bi bi-bell-fill"></i> Emergency: 24HR / 7DAYS</p>
          <hr></hr>
          <img src={img12} className='home11'/>
        </div>
      </div>

      <div className='main-p4'>
      <div>
            <Carousel className='ca1'>
              <Carousel.Item interval={1200}>
                <img
                  className="home12"
                  src={img13}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home13"
                  src={img14}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home14"
                  src={img15}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home15"
                  src={img16}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home16"
                  src={img17}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home17"
                  src={img18}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home18"
                  src={img19}
                />
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <img
                  className="home19"
                  src={img20}
                />
              </Carousel.Item>
            </Carousel>
          </div>
      </div>


      <div className='main-p5'>
        <div className='kchild1'>
          <h2 >Services:</h2>
         <ol>
         <i class="bi bi-caret-right icon-ol"></i>  AC mechanics<br/>
         <i class="bi bi-caret-right icon-ol"></i> Engine mechanics and repire<br/>
         <i class="bi bi-caret-right icon-ol"></i> Car body work<br/>
         <i class="bi bi-caret-right icon-ol"></i> Painting work<br/>
         <i class="bi bi-caret-right icon-ol"></i> Service technician<br/>
         <i class="bi bi-caret-right icon-ol"></i> Small Engine Mechanics <br/>
         
         </ol>
        </div>
        <div className='kchild2'>
          <h2>Pages</h2>
          <ol>
            Home<br/>
            Services<br/>
            About Us<br/>
            Our Projects<br/>
            Contact Us
         </ol>
        </div>
        <div className='kchild3'>
          <h3>MECH&SPARES</h3>
          <p>Monday – Friday: 7:30am – 5pm<br/>Saturday: 7:30am – 5pm</p>
         <hr></hr>
         <i class="bi bi-youtube kchild3-icone1"></i>
         <i class="bi bi-linkedin kchild3-icone2"></i>
         <i class="bi bi-facebook kchild3-icone3"></i>
        </div>
      </div>

      <div className='main-p6'>
        <div>
          <p>© 2024 Mechanical Service Company | Terms and Condition</p>
        </div>
      </div>






    </>
  )
}

export default Homepage