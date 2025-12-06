import React from 'react';
import Hooks from '../../Hooks/Hooks';

const HookForm = () => {

    const [name, nameOnChange] = Hooks('');
    const [email, emailOnChange] = Hooks('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('sub', name, email);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    defaultValue={name}
                    onChange={nameOnChange}
                    type="text"
                    name="name"
                />
                <br />
                <input
                    defaultValue={email}
                    onChange={emailOnChange} type="email"
                    name="email"
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;