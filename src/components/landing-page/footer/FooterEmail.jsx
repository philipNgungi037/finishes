import React, { useState } from 'react'


const FooterEmail = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any action with the email here, such as sending it to a server or storing it in state.
        console.log('Email submitted:', email);
    };

    return (
        <div className='email-form  w-full p-4 lg:p-8'>
            <h1 className='payments-title text-center text-xs lg:text-sm p-1 lg:p-4'>
                Ready to Learn More? Let's Get Started!
            </h1>
            <form onSubmit={handleSubmit} className='flex justify-center w-full'>
                <label>
                    <input
                        type="email"
                        placeholder='ENTER EMAIL'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='text-black p-1 lg:p-4 rounded-md mr-1 lg:mr-4'
                    />
                </label>
                <button type="submit" className='email-submit hover:text-white p-1 lg:p-4 bg-slate-600 rounded-md'>SUBMIT</button>
            </form>
        </div>
    )
}

export default FooterEmail