import React, { useState } from 'react';


function ContactForm() {
    // hook that will manage the state of the contact form's data and set inital state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // deconstruct formState into its named properties
    const { name, email, message } = formState;
    // ------------------- function to sync the inter state of the formSrate with user input from the DOM ------------------- //
    function handleChange(e) {
        // including spread operator so that we can also capture the other key-value pairs in this object
        // name here reffers to the name of the input so we can capture all input values with the code below
        setFormState({...formState, [e.target.name]: e.target.value })
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
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email"  defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onChange={handleChange}  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;