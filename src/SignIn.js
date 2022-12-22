import React from 'react';
import Error from './Error';

function SignIn(props){
    return(
        <div>
            <Error error = {props.error} /><br />
            <label>
                Create a username:<br />
                <input type='text' name='username' onChange={props.onChange} />
            </label><br />
            <label>
                Create a password:<br />
                <input type='text' name='password' onChange={props.onChange} />
            </label><br />
            <label>
                Enter your firstname:<br />
                <input type='text' name='firstname' onChange={props.onChange} />
            </label><br />
            <input type='button' value='Sign in' onClick={props.onSubmit} />
        </div>
    )
}

export default SignIn;