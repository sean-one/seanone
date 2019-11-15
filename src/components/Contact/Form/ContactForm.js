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
                    setNameError(' * invalid name');
                    break;
                } else {
                    setNameError('');
                    break;
                }
            case 'formMessage':
                if (e.value.length < 1) {
                    setMessageError(' * invalid message');
                    break;
                } else {
                    setMessageError('');
                    break;
                }
            case 'formEmail':
                if (!e.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)) {
                    setEmailError(' * please include email');
                    break;
                } else {
                    setEmailError('');
                    break;
                }
            case 'formPhone':
                if (!e.value.match(/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g)) {
                    setPhoneError(' * please include phone');
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

    const checkEmpty = () => {
        if (name && email && phone && message) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (nameError === '' && emailError === '' && phoneError === '' && messageError === '' && checkEmpty()) {
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
            <p>Name:&nbsp;&nbsp;<span className='errorMsg'>{nameError}</span></p>
            <input 
                className='formInput'
                type='text'
                placeholder='John Doe'
                name='formName'
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <br />
            <p>Email:&nbsp;&nbsp;<span className='errorMsg'>{emailError}</span></p>
            <input
                className='formInput'
                type='text'
                placeholder='name@email.com'
                name='formEmail'
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <br />
            <p>Phone:&nbsp;&nbsp;<span className='errorMsg'>{phoneError}</span></p>
            <input
                className='formInput'
                type='text'
                placeholder='555-555-5555'
                name='formPhone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                onBlur={e => validate(e.target)}
            />
            <br />
            <p>Message:&nbsp;&nbsp;<span className='errorMsg'>{messageError}</span></p>
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
            <div className='errorMsg'>{submitError}</div>
            <input className='formButton' type="submit" value="Submit" /><br />
        </form>
    );

}

export default ContactForm;