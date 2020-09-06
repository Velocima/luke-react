import './App.css';
import React from 'react';
import { NavBar } from '../NavigationBar/NavigationBar.jsx';
import { Landing } from '../landing/Landing.jsx'


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarState: false,
        }
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    handleBurgerClick() {
        this.setState({navBarState: !this.state.navBarState})
        console.log(this.state.navBarState)
    }


    render() {
        return (
            <div className='app'>
                <div className="burger" onClick={this.handleBurgerClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                {this.state.navBarState ? <NavBar /> : null}
                <Landing />
            </div>
        )
    }
}
// src={require('../pictures/bg.png')}