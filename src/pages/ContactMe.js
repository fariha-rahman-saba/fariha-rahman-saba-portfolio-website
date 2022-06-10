import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const ContactMe = () => {
    const [state, handleSubmit] = useForm("mzbowvja");

    if (state.succeeded) {
        return <p className='font-bold text-3xl text-primary mt-10 mb-20'>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl text-primary mt-10'>Contact Me</h1>
            <input
                id="email"
                type="email"
                name="email"
                placeholder='Email Address'
                className='input w-full max-w-xs mt-10 input-bordered'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br />
            <input
                id="message"
                type='text'
                name="message"
                placeholder='Message'
                className='input w-full max-w-xs mt-10 input-bordered'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br />
            <button type="submit" className='btn mt-10 mb-20' disabled={state.submitting}>
                Submit
            </button>
        </form>

    );
};

export default ContactMe;;