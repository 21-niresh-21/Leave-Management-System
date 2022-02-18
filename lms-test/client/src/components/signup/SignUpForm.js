import React from 'react';

function SignUpForm() {
    return (

        <div className='form-container'>
            <form>
                <div className='form-title'>
                    <h4>Set Up Your Admin Account for your Organisation</h4>
                    <div className='form-sub-title'>
                        <h1>Organisation already registered?<a>Log in</a></h1>
                    </div>
                </div>

                <div className='form-inputs'>
                    <div className='name-container'>
                        <label>Organisation name</label>
                        <input type='text' />
                    </div>
                    <div className='domain-container'>
                        <label>Domain name</label>
                        <input type='text'disabled />
                    </div>
                    <div className='state-container'>
                        <label>State</label>
                        <input type='text' />
                    </div>
                    <div className='country-container'>
                        <label>Country</label>
                        <input type='text' />
                    </div>
                    <div className='pincode-container'>
                        <label>Pincode</label>
                        <input type='number' minLength='6' maxLength='6'/>
                    </div>
                    <div className='phone-container'>
                        <label>Phone number</label>
                        <input type='number' />
                    </div>
                    <div className='email-container'>
                        <label>Organisation mail</label>
                        <input type='mail' />
                    </div>
                    <div className='password-container'>
                        <label>Password</label>
                        <input type='text' />
                    </div>
                    
                </div>


            </form>

        </div>
    );
}

export default SignUpForm;
