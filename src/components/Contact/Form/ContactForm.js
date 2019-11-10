import React, { useState } from 'react';
import Axios from 'axios';

// styling
import './ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    const checkValid = () => {
        if (!email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)) {
            setEmailError('Please enter a valid email');
        }
        return true;

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (checkValid()) {

        } else {
            setEmailError('');
        }
        // let isValidemail = email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
        // let isValidphone = phone.match(/[(]?\d{3}[-.)]?[ ]?\d{3}[-.]?\d{4}\b/g);
        // console.log(isValidemail, isValidphone);
        // Axios({
        //     method : 'post',
        //     url : 'https://f8oxshxeb5.execute-api.us-east-1.amazonaws.com/default/submit-contact',
        //     data : {
        //         name,
        //         email,
        //         phone,
        //         message
        //     }
        // });
        // console.log(e);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit} >
            <p>Name:</p><div>{nameError}</div>
            <input className='formInput' type='text' placeholder='John Doe' name='formName' value={name} onChange={e => setName(e.target.value)} /><br />
            <p>Email:</p><div>{emailError}</div>
            <input className='formInput' type='text' placeholder='name@email.com' name='formEmail' value={email} onChange={e => setEmail(e.target.value)} /><br />
            <p>Phone:</p>
            <input className='formInput' type='text' placeholder='555-555-5555' name='formPhone' value={phone} onChange={e => setPhone(e.target.value)} /><br />
            <p>Message:</p>
            <textarea className='formInput' name='formMessage' placeholder='Tell us a little about what you are looking for...' rows='10' cols='30' value={message} onChange={e => setMessage(e.target.value)} /><br />
            <input className='formButton' type="submit" value="Submit" /><br />
        </form>
    );

}

export default ContactForm;