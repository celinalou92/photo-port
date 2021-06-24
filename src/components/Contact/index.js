import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // hook that will manage the state of the contact form's data and set inital state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    // deconstruct formState into its named properties
    const { name, email, message } = formState;
    // ------------------- function to sync the inter state of the formState with user input from the DOM ------------------- //
    function handleChange(e) {
        // validation for email
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                };
            };
        };  
        // including spread operator so that we can also capture the other key-value pairs in this object
        // name here reffers to the name of the input so we can capture all input values with the code below
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        // state will only update if form validation is correct
    }
    // ---------------- function to handle form submit ---------------- //
    function handleSubmit(e) {
        e.preventDefault();
        // leaving form submit as is since we are only building front end.
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email"  defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange}  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;