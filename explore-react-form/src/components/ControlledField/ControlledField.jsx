import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword] = useState('');
    const [error , setError] = useState('');

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
        
        // if (password.length < 6) {
        //     setError("password must be 6 char")
        // } else {
        //     setError('');
        // }
    }

    const handleSubmit = (e) => {        
        e.preventDefault();
        if (password.length < 6) {
            setError("password must be 6 char")
        } else {
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder='enter email'

                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder='enter password'
                    defaultValue ={password}
                    onChange={handlePasswordOnChange}
                    required
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                />
            </form>
            <p>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;