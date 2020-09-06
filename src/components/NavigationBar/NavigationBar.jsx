import React from 'react';
import './NavigationBar.css';

export class NavBar extends React.Component {
    render () {
        return (
            <nav className={this.props.showNav ? "active" : ""}>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Teaching</h3>
                <h3>Contact</h3>
            </nav>
        )
    }
}