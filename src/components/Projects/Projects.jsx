import React from 'react';
import './Projects.css'

export class Projects extends React.Component {
    render () {
        return (
            <div className="bio-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Projects</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <div className="overflow-container">

                    </div>
                </div>
            </div>
        )
    }
}
