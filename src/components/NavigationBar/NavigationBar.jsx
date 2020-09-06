import React from 'react';
import './NavigationBar.css';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        switch (e.target.innerHTML) {
            case 'About': 
                this.props.onNewPage(1);
                break;
            case 'Projects': 
                this.props.onNewPage(1);
                break;
            case 'Teaching': 
                this.props.onNewPage(1);
                break;
            case 'Contact': 
                this.props.onNewPage(1);
                break;
            default: 
                return;
        }
    }

    render () {
        return (
            <nav className={this.props.showNav ? "active" : ""}>
                <h3 onClick={this.handleClick}>About</h3>
                <h3 onClick={this.handleClick}>Projects</h3>
                <h3 onClick={this.handleClick}>Teaching</h3>
                <h3 onClick={this.handleClick}>Contact</h3>
            </nav>
        )
    }
}