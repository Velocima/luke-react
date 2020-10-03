import '../../css/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DelayLink } from '../DelayLink/DelayLink';
import { NavBar } from '../NavigationBar/NavigationBar';
import { HomeButton } from '../HomeButton/HomeButton';
import { Landing } from '../landing/Landing'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact';
import { Teaching } from '../Teaching/Teaching';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            navBarState: false,
            pageIsRendering: false,
            showHomeButton: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.updatePage = this.updatePage.bind(this);
    }
    pages = ["About", "Projects", "Teaching", "Contact"]

    toggleNav() {
        this.setState({navBarState: !this.state.navBarState});
    }

    updatePage() {
        this.setState({
            pageIsRendering: true,
            navBarState: false,
        });
        setTimeout(() => this.setState({
            pageIsRendering: false
        }), 1000);
    }

    render() {
        return (
            <div className='app'>
                <Router>
                    <DelayLink 
                        delay={1000} 
                        onDelayStart={this.updatePage}
                        to="/">
                        <HomeButton/>
                    </DelayLink>
                    <div className="burger" onClick={this.toggleNav}>
                        <div className={this.state.navBarState ? "line-1 line-1-clicked" : "line-1"}></div>
                        <div className={this.state.navBarState ? "line-2 line-2-clicked" : "line-2"}></div>
                        <div className={this.state.navBarState ? "line-3 line-3-clicked" : "line-3"}></div>
                    </div>
                    <NavBar 
                        showNav={this.state.navBarState} 
                        toggleNav={this.toggleNav} 
                        pages={this.pages} 
                        onNavItemClick={{updatePage: this.updatePage, toggleNav: this.toggleNav}}/>
                    <Switch>
                        <Route path="/about">
                            <About showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                        </Route>
                        <Route path="/projects">
                            <Projects showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                        </Route>
                        <Route path="/teaching">
                            <Teaching showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                        </Route>
                        <Route path="/contact">
                            <Contact showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                        </Route>
                        <Route path="/">
                            <Landing showNav={this.state.navBarState} toNextPage={this.state.pageIsRendering}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}