import './App.css';
import React from 'react';
import { NavBar } from '../NavigationBar/NavigationBar';
import { Landing } from '../landing/Landing'
import { Bio } from '../Bio/Bio'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarState: false,
            pageRendered: 1,
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.renderPage = this.renderPage.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    toggleNav() {
        this.setState({navBarState: !this.state.navBarState})
    }

    renderPage(state) {
        switch (state) {
            case 0:
                return <Landing showNav={this.state.navBarState} />
                break;
            case 1:
                return <Bio showNav={this.state.navBarState} />
                break;
            default: 
                return <Landing showNav={this.state.navBarState} />
                break;
        }
    }

    updatePage(pageNumber) {
        this.setState({pageRendered: pageNumber});
    }

    handleHomeClick() {
        this.setState({pageRendered: 0});
        if (this.state.navBarState) this.toggleNav();
    }

    render() {
        return (
            <div className='app'>
                {this.state.pageRendered === 0 ? <i class="fas fa-home invisible"></i> : <i class="fas fa-home" onClick={this.handleHomeClick}></i>}
                <div className="burger" onClick={this.toggleNav}>
                    <div className={this.state.navBarState ? "line-1 line-1-clicked" : "line-1"}></div>
                    <div className={this.state.navBarState ? "line-2 line-2-clicked" : "line-2"}></div>
                    <div className={this.state.navBarState ? "line-3 line-3-clicked" : "line-3"}></div>
                </div>
                <NavBar showNav={this.state.navBarState} onNewPage={[this.updatePage, this.toggleNav]}/>
                {this.renderPage(this.state.pageRendered)}
            </div>
        )
    }
}