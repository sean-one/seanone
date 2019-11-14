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
    const [submitError, setSubmitError] = useState('');

    const validate = (e) => {
        switch(e.name) {
            case 'formName':
                if (e.value.length < 1) {
                    setNameError('Please be sure to include your name');
                    break;
                } else {
                    setNameError('');
                    break;
                }
            case 'formMessage':
                if (e.value.length < 1) {
                    setMessageError('Please include a brief project description');
                    break;
                } else {
                    setMessageError('');
                    break;
                }
            case 'formEmail':
                if (!e.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)) {
                    setEmailError('Please include a valid email address');
                    break;
                } else {
                    setEmailError('');
                    break;
                }
            case 'formPhone':
                if (!e.value.match(/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g)) {
                    setPhoneError('Please include a valid phone number');
                    break;
                } else {
                    setPhoneError('');
                    break;
                }
            default:
                console.log('somethings not right');
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (nameError === '' && emailError === '' && phoneError === '' && messageError === '') {
            setSubmitError('');
            Axios({
                method : 'post',
                url : 'https://f8oxshxeb5.execute-api.us-east-1.amazonaws.com/default/submit-contact',
                data : {
                    name,
                    email,
                    phone,
                    message
                }
            });
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } else {
            setSubmitError('Please be sure to complete all fields')
        }
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit} >
            <p>Name:</p>
            <input 
                className='formInput'
                type='text'
                placeholder='John Doe'
                name='formName'
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <div>{nameError}</div>
            <br />
            <p>Email:</p>
            <input
                className='formInput'
                type='text'
                placeholder='name@email.com'
                name='formEmail'
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <div>{emailError}</div>
            <br />
            <p>Phone:</p>
            <input
                className='formInput'
                type='text'
                placeholder='555-555-5555'
                name='formPhone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <div>{phoneError}</div>
            <br />
            <p>Message:</p>
            <textarea
                className='formInput'
                name='formMessage'
                placeholder='Tell us a little about what you are looking for...'
                rows='10'
                cols='30'
                value={message}
                onChange={e => setMessage(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <br />
            <input className='formButton' type="submit" value="Submit" /><div>{submitError}</div><br />
        </form>
    );

}

export default ContactForm;