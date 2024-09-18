import React, { useState } from 'react'
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/addnewspares.css'
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';

function Addnewspares() {
  let [a, seta] = useState({
    shopname: "",
    feildin:"",
    shoplocation: "",
    shopdetails:"",
    shopimage:""
  });

  let schema = yup.object().shape({
    shopname: yup.string().required("shopname is must"),
    feildin: yup.string().required("feildin is must"),
    shoplocation: yup.string().required("shoplocation is must"),
    shopdetails: yup.string().required("shopdetails is must"),
    shopimage: yup.string().required("shopimage is must")
  });

  let handleInput = (e) => {
    seta({ ...a, [e.target.name]: e.target.value });
  };

  let handleSubmit = (use) => {
    console.log(use);
  }
  return (
    <div>

      <div >
        <Card className='addmech1'>

              <Formik
                initialValues={a}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, }) => (
                  <Form onSubmit={handleSubmit}>

                    <Col>
                      <Form.Control className='addmech2'
                        type="shopname"
                        name="shopname"
                        placeholder='Shopname'
                        value={a.email}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <Form.Control.Feedback type="invalid">
                      </Form.Control.Feedback>
                      <ErrorMessage name="shopname" component="div" className='text-danger' />

                    </Col>
                    <Col>
                      <Form.Control className='addmech3'
                        type="feildin"
                        name="feildin"
                        placeholder='Feild in'
                        value={a.email}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <Form.Control.Feedback type="invalid">
                      </Form.Control.Feedback>
                      <ErrorMessage name="shopname" component="div" className='text-danger' />

                    </Col>

                    <Col>
                      <Form.Control className='addmech3'
                        type="shoplocation"
                        name="shoplocation"
                        placeholder='Shoplocation'
                        value={a.password}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <ErrorMessage name="shoplocation" component="div" className='text-danger' />

                    </Col>
                    <Col>
                      <Form.Control className='addmech3'
                        type="shopdetails"
                        name="shopdetails"
                        placeholder='Shopdetails'
                        value={a.password}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <ErrorMessage name="shopdetails" component="div" className='text-danger' />

                    </Col>
                    <Col>
                      <Form.Control className='addmech3'
                        type="file"
                        name="shopimage"
                        placeholder='Shopimage'
                        value={a.password}
                        onChange={(e) => { handleInput(e); handleChange(e); }}
                      />
                      <ErrorMessage name="shopimage" component="div" className='text-danger' />

                    </Col>
                    <button variant="primary" type="submit" className='addmech4'>Add</button>
                    
                  </Form>
                )}
              </Formik>
           
        </Card>


      </div>

    </div>


  )
}

export default Addnewspares