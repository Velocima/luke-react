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
    }


    render() {
        return (
            <div className='app'>
                <div className="burger" onClick={this.handleBurgerClick}>
                    <div className={this.state.navBarState ? "line-1 line-1-clicked" : "line-1"}></div>
                    <div className={this.state.navBarState ? "line-2 line-2-clicked" : "line-2"}></div>
                    <div className={this.state.navBarState ? "line-3 line-3-clicked" : "line-3"}></div>
                </div>
                <NavBar showNav={this.state.navBarState}/>
                <Landing />
            </div>
        )
    }
}
// src={require('../pictures/bg.png')}