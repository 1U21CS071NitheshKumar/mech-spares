import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row ,Button } from 'react-bootstrap'
import img21 from '../images/img21.jpg'
import '../component/about.css'; 

function About() {
  return (
    <div className='z3'>
       <div>
       <img src={img21}className='aboutimg' />
       <p className='about1'>ABOUT US</p>
      </div>

<p className='about4'>we specialize in top-quality automotive spare parts and expert mechanic services.With a commitment to excellence and customer satisfaction,we provide reliable solutions to ensure your vehicle performs at its best.Explore our wide range of products and services designed to keep you on the road with confidence.</p>
      
<Row>
    <Col>
    <Accordion className='about3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>WHAT WE OFFER MECHANICS</Accordion.Header>
        <Accordion.Body>
            
        <h4>Expert Mechanical Repairs</h4> Our skilled technicians are equipped to handle a wide variety of mechanical issues, from routine maintenance to complex repairs.
 We ensure that your vehicle operates at its best with precision diagnostics and high-quality workmanship.<br/>

 <h4>Custom Solutions</h4> We understand that every vehicle is unique.
 Our team works closely with you to provide tailored solutions that meet your specific needs and preferences.<br/>

 <h4>Emergency Repairs</h4> Mechanical problems can happen at any time.
 We offer prompt emergency repair services to get you back on the road as soon as possible.<br/>
 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>WHAT WE OFFER SPARES</Accordion.Header>
        <Accordion.Body>
        
 <h4>Genuine Spare Parts</h4> We stock a wide selection of high-quality, genuine spare parts for various makes and models. 
 <br/>Whether you need replacement parts for an engine overhaul or simple components for minor repairs, you can trust us to provide reliable products.<br/>

 <h4>Diagnostic Services</h4> Our advanced diagnostic tools and techniques help identify issues quickly and accurately,
 allowing us to address problems efficiently and effectively.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>WHY CHOOSE US</Accordion.Header>
        <Accordion.Body>
        <h4>Experienced Professionals</h4> Our team consists of highly skilled mechanics with years of experience in the industry. 
  We combine expertise with ongoing training to ensure we stay ahead of the latest automotive technologies and techniques.

  <h4>Quality Assurance</h4> We are committed to delivering top-quality service and products. 
From genuine spare parts to meticulous repair work, we adhere to the highest standards to ensure your vehicle performs reliably and efficiently.

<h4>Trust and Reliability</h4> Our reputation is built on trust and reliability.
 Many of our customers return to us for their ongoing automotive needs and refer us to friends and family. 
 We take pride in being a dependable partner in vehicle maintenance and repair.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>OUR VALUES</Accordion.Header>
        <Accordion.Body>
        <h4>Customer Focus</h4> Our customers are at the heart of everything we do.
 We listen to your needs, provide personalized solutions, and work hard to exceed your expectations. 
 Your satisfaction is our ultimate goal.

 <h4>Respect</h4> We value and respect each customer, treating everyone with courtesy and professionalism.
 We appreciate the trust you place in us and aim to create a positive and respectful experience for all.

 <h4>Teamwork</h4> Success in automotive care is a team effort. We foster a collaborative work environment
 where every team member is valued and empowered to contribute their best,
 ensuring that our customers receive the highest level of service.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Developers</Accordion.Header>
        <Accordion.Body>
         FRONT END :NITHISH<br/>
         BACK END :VISHWAA
        </Accordion.Body>
      </Accordion.Item>
      

    </Accordion>
    </Col>
</Row>

    </div>
  )
}

export default About