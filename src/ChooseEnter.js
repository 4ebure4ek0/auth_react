import React from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';

function ChooseEnter(props){
    if(props.isRegistered){
        return <LogIn onChange={props.onChange} onSubmit={props.onSubmitLogIn} error={props.error}/>
    }
    return <SignIn onChange={props.onChange} onSubmit={props.onSubmitSignIn} error={props.error} />
}

export default ChooseEnter;