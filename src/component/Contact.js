import React from 'react'
import '../component/contact.css'
import Swal from 'sweetalert2'

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4ee3249d-c133-4f95-af2d-6701569c3dd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success",
        text: "Message sent successfully",
        icon: "success"
      })    }
  }
  return (
    <>
    <div className='z5'>
    <selection className="contact">
      <form onSubmit={onSubmit} >
        <h2>Contact From</h2>
        <div className='input box'>
          <label>Full Name</label>
          <input type='text' className='field' placeholder='Enter your name' name='name'required/>
        </div>
        <div className='input box'>
          <label>Email Address</label>
          <input type='email' className='field' placeholder='Enter your email'name='email' required/>
        </div>
        <div className='input box'>
          <label>Email Address</label>
        <textarea name='message'  className='fieldmess' placeholder='Enter your message' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </selection>
    </div>
    </>
  )
}

export default Contact