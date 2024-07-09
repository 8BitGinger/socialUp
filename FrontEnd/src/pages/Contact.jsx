import React, {useState} from 'react'
import '../assets/css/contact.css'

import devIcon from '../assets/images/devIcon.png'

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
        console.log(form)
    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(form)
    }

  return (
    <section className='contact_container'>
        <h1>Contact the Developer</h1>
        <div className="dev">
            <img src={devIcon} alt="Developer" />
            <p>Hi, I am <a href="https://ryanfann.netlify.app/">Ryan</a> the 8-Bit Ginger, a MERN Stack developer based in the United States.</p>
           
        </div>
       
        <form className='contact_form'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required onChange={handleFormChange}/>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required onChange={handleFormChange}/>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' required onChange={handleFormChange}></textarea>
          <button type='submit' className='btn btn_submit' onClick={sendForm}>Submit</button>
        </form>
    </section>
  )
}

export default Contact