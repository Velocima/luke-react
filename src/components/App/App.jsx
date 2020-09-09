import './App.css';
import React from 'react';
import { NavBar } from '../NavigationBar/NavigationBar';
import { Landing } from '../landing/Landing'
import { Bio } from '../Bio/Bio'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarState: false,
            pageRendered: 0,
            pageIsRendering: false,
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
                return <Landing showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                break;
            case 1:
                return <Bio showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                break;
            case 2:
                return <Projects showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                break;
            case 4:
                return <Contact showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                break;
            default: 
                return <Landing showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                break;
        }
    }

    updatePage(pageNumber) {
        this.setState({
            pageIsRendering: true,
        });
        setTimeout(() => this.setState({
            pageRendered: pageNumber,
            pageIsRendering: false
        }), 1000);
    }

    handleHomeClick(e) {
        e.target.classList.add('invisible');
        if (this.state.navBarState) this.toggleNav();
        this.setState({
            pageIsRendering: true,
        });
        setTimeout(() => this.setState({
            pageRendered: 0,
            pageIsRendering: false
        }), 1000);
    }

    render() {
        return (
            <div className='app'>
                {this.state.pageRendered === 0 ? <i className="fas fa-home invisible"></i> : <i className="fas fa-home" onClick={this.handleHomeClick}></i>}
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