import React from 'react';

function LoginForm() {
    return (
        <div className='login-container'>
            <form>
                <div className='organisation-name'>
                    <h3>Amrita Viswa Vidyapeetam</h3>
                </div>
                <div className='registration-number-container'>
                    <label>Registration number</label>
                    <input type='text' />
                </div>
                <div className='login-password-container'>
                    <label>Password</label>
                    <input type='text' />
                </div>
            </form>
        </div>

    );
}

export default LoginForm;