import React from 'react';
import '../../css/Landing.css';


export class Landing extends React.Component {
    render () {
        return (
            <div className="landing-container">
                <div className={this.props.showNav  || this.props.toNextPage ? "left left-open" : "left"}>
                    <div className="spacer"></div>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Luke Hartley</h1>
                    </div>
                    <div className="overflow-container">
                        <h3 className={this.props.toNextPage ? "drop-down" : ""}>Drummer, Educator</h3>
                    </div>
                </div>
                <div className={this.props.showNav || this.props.toNextPage ? "right right-closed" : "right"}>
                    <div className="img-overflow-container">
                        <img 
                            className={
                                this.props.showNav ? "opacity-zero" : 
                                this.props.toNextPage ? "hide-img" : 
                                ""
                            } 
                            src={require("../../pictures/image-5.png")} 
                            alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
