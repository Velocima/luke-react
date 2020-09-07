import React from 'react';
import './Projects.css'



export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        switch (e.target.innerHTML) {
            case "Bow to the Sound - Year of the Dog":
                this.setState({videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16"})
                break;
            case "She Makes me Feel - Year of the Dog":
                this.setState({videoSrc: "https://www.youtube.com/embed/iSIoW8uyj6k?start=26"})
                break;
            case "Sex Education does Romeo and Juliet":
                this.setState({videoSrc: "https://www.youtube.com/embed/u3o5YdZSOQQ"})
                break;
            case "Sweet Songs of Survival - Monc":
                this.setState({videoSrc: "https://www.youtube.com/embed/QeQC1JuhxzQ"})
                break;
            case "The Defender - Last Change Lawyer NYC Soundtrack":
                this.setState({videoSrc: "https://www.youtube.com/embed/onYyRb_Jpms"})
                break;
            default:
                this.setState({videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16"})
                break;

        }
    }

    render () {
        return (
            <div className="bio-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Projects</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <ul>
                        <div className="overflow-container">
                            <li className="li-1">My works:</li>
                        </div>
                        <div className="overflow-container">
                            <li className="li-2" onClick={this.handleClick}>Bow to the Sound - Year of the Dog</li>
                        </div>
                        <div className="overflow-container">
                            <li className="li-3" onClick={this.handleClick}>She Makes me Feel - Year of the Dog</li>
                        </div>
                        <div className="overflow-container">
                            <li className="li-4" onClick={this.handleClick}>Sex Education does Romeo and Juliet</li>
                        </div>
                        <div className="overflow-container">
                            <li className="li-5" onClick={this.handleClick}>Sweet Songs of Survival - Monc</li>
                        </div>
                        <div className="overflow-container">
                            <li className="li-6" onClick={this.handleClick}>The Defender - Last Change Lawyer NYC Soundtrack</li>
                        </div>
                    </ul>
                    <div className="overflow-container">
                        <iframe className="card-img" src={this.state.videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
