import React from 'react';
import { DelayLink } from '../DelayLink/DelayLink';
import '../../css/NavigationBar.css';

export class NavBar extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onNavItemClick.toggleNav();
        this.props.onNavItemClick.updatePage();
    }

    render () {
        return (
            <nav className={this.props.showNav ? "active" : ""}>
                {this.props.pages.map(page => {
                    return <h3 key={page} >
                        <DelayLink 
                            delay={1000} 
                            onDelayStart={this.handleClick}
                            to={`/${page.toLowerCase()}`}>
                            {page}
                        </DelayLink>
                    </h3>
                })}
            </nav>
        )
    }
}
