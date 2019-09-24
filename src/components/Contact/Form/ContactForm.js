import React, { useState } from 'react';

// styling
import './ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, phone, message);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit} >
            <p>Name:</p>
            <input className='formInput' type='text' placeholder='John Doe' name='formName' value={name} onChange={e => setName(e.target.value)} /><br />
            <p>Email:</p>
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