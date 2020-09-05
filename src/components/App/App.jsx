import './App.css';
import React from 'react';
import { NavBar } from '../NavigationBar/NavigationBar.jsx';
import { Landing } from '../landing/Landing.jsx'


export class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Landing />
            </div>
        )
    }
}
// src={require('../pictures/bg.png')}