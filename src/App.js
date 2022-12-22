import './App.css';
import React from 'react';
import Enter from './Enter';
import HomePage from './HomePage';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {isRegistered: props.isRegistered, isLoggedIn: false, username: '', firstname:''}
        this.handleChangeLog = this.handleChangeLog.bind(this)
        this.logOut = this.logOut.bind(this)
    }
    handleChangeLog(username, firstname){
        this.setState({isLoggedIn: true})
        this.setState({username: username})
        this.setState({firstname: firstname})
    }
    logOut(){
        this.setState({isLoggedIn: false})
    }
    render(){
    if(!this.state.isLoggedIn){
      return (
        <Enter onEnter={this.handleChangeLog} />
        );
      }
      return(
        <HomePage username={this.state.username} firstname={this.state.firstname} logOut={this.logOut} />
      )
    }
}




export default App;
