import './App.css';
import React from 'react';

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='homepage'>
                <img src='./img_person.jpg' alt='person'/>
                <ul>
                    <li>Your name: {this.props.firstname}</li>
                    <li>Your username: {this.props.username}</li>
                </ul>
                <input type='button' value='Log out' onClick={this.props.logOut}/>
            </div>
        )
    }
}

export default HomePage;