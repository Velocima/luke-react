import React from 'react';
import './Landing.css'
export class Landing extends React.Component {
    render () {
        return (
            <div className="landing-container">
                <div className="left">
                    <div className="text-container">
                        <h1>Luke Hartley</h1>
                    </div>
                    <div className="text-container">
                        <h3>Drummer, Educator</h3>
                    </div>
                </div>
                <div className="right">
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <img src={require("../../pictures/image-5.png")} alt=""/>
                </div>
            </div>
        )
    }
}
