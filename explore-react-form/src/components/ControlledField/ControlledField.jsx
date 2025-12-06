import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword] = useState('');

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {        
        e.preventDefault();
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
        </div>
    );
};

export default ControlledField;