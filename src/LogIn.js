import React from 'react';
import Error from './Error';

function LogIn(props){
    return(
        <div>
        <Error error = {props.error} /><br />
        <label>
            Enter your username:<br />
            <input type='text' name='username' onChange={props.onChange} />
        </label><br />
        <label>
            Enter your password:<br />
            <input type='text' name='password' onChange={props.onChange} />
        </label><br />
        <input type='button' value='Log in' onClick={props.onSubmit} />
    </div>
    )
}

export default LogIn;