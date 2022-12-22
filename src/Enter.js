import './App.css';
import React from 'react';
import ChooseEnter from './ChooseEnter';

class Enter extends React.Component {
    constructor(props){
        super(props);
        this.state = {isRegistered: false, username: '', password: '', firstname: '', error: '', onEnter: props.onEnter}
        this.handleClickLogIn = this.handleClickLogIn.bind(this);
        this.handleClickSignIn = this.handleClickSignIn.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStorage = this.handleStorage.bind(this)
    }
    handleClickLogIn(){
        this.setState({isRegistered: true})
    }
    handleClickSignIn(){
        this.setState({isRegistered: false})
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    handleStorage(){
        let users = localStorage.getItem('users')
        if (users==null){
            users = []
        } else{
            users = JSON.parse(users)
        }
        return users
    }
    handleSubmitSignIn(){
        let users = this.handleStorage()
        let user = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname
        }
        const username_check = users.find(user => user.username == this.state.username)
        if (username_check !== undefined)
            this.setState({error: 'This username is already taken'})
        if(this.state.username === '' || this.state.password === '' || this.state.firstname === ''){
            this.setState({error: 'Fill in the fields'})
        } else{
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
            this.state.onEnter(this.state.username, this.state.firstname)
        }
        // localStorage.clear()
    }
    handleSubmitLogIn(){
        let users = this.handleStorage()
        const user = users.find(user => user.username == this.state.username)
        const username_check = user['username']
        const password_check = user['password']
        const firstname = user['firstname']
        if (username_check === this.state.username && password_check === this.state.password)
            this.state.onEnter(this.state.username, firstname)
        else{
            this.setState({error: 'Wrong username or password'})
        }

    }
    render(){
        let button;
        if(!this.state.isRegistered){
            button = <input type='button' value="I'm registered" onClick={this.handleClickLogIn} />
        } else{
            button = <input type="button" value="I'm not registered" onClick={this.handleClickSignIn} />
        }
        return(
            <div className='container'>
                <ChooseEnter isRegistered={this.state.isRegistered} onChange={this.handleChange} onSubmitSignIn={this.handleSubmitSignIn} onSubmitLogIn={this.handleSubmitLogIn} error={this.state.error} />
                {button}
            </div>
        )
    }
}

export default Enter;