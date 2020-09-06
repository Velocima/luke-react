import React from 'react';
import './Landing.css'

export class Landing extends React.Component {
    render () {
        return (
            <div className="landing-container">
                <div className={this.props.showNav ? "left left-open" : "left"}>
                    <div className="overflow-container">
                        <h1>Luke Hartley</h1>
                    </div>
                    <div className="overflow-container">
                        <h3>Drummer, Educator</h3>
                    </div>
                </div>
                <div className={this.props.showNav ? "right right-closed" : "right"}>
                    <img className={this.props.showNav ? "scale-down" : ""} src={require("../../pictures/image-5.png")} alt=""/>
                </div>
            </div>
        )
    }
}
