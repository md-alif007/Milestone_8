import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="" />
                <br />
                <input
                    type="password"
                    name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;