import React from 'react';
import '../../css/Projects.css';


export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16",
            videoTitle: "",
            listItem: 2,
        }
        this.handleClick = this.handleClick.bind(this);
        this.setClassName = this.setClassName.bind(this);
    }
    
    handleClick(e) {
        switch (e.target.innerHTML) {
            case "Bow to the Sound - Year of the Dog":
                this.setState({
                    videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16", 
                    videoTitle: "Bow to the Sound - Year of the Dog",
                    listItem: 2
                })
                break;
            case "She Makes me Feel - Year of the Dog":
                this.setState({videoSrc: "https://www.youtube.com/embed/iSIoW8uyj6k?start=26",
                    videoTitle: "Year of the Dog - She Makes Me Feel", 
                    listItem: 3
                })
                break;
            case "Sex Education does Romeo and Juliet":
                this.setState({videoSrc: "https://www.youtube.com/embed/u3o5YdZSOQQ", 
                    videoTitle: "Sex Education Does Romeo & Juliet - The Musical In Full (Exclusive Unseen Footage)",
                    listItem: 4
                })
                break;
            case "Sweet Songs of Survival - Monc":
                this.setState({videoSrc: "https://www.youtube.com/embed/QeQC1JuhxzQ", 
                    videoTitle: "Preview of the new album 'Sweet Songs Of Survival' by Monc",
                    listItem: 5
                })
                break;
            case "The Defender - Last Change Lawyer NYC Soundtrack":
                this.setState({videoSrc: "https://www.youtube.com/embed/onYyRb_Jpms", 
                    videoTitle: "\"The Defender\" from my score for BBC2's \"Last Chance Lawyer NYC\" (2018)",
                    listItem: 6
                })
                break;
            default:
                this.setState({videoSrc: "https://www.youtube.com/embed/b6piPlGImMA?start=16", 
                    videoTitle: "Bow to the Sound - Year of the Dog",
                    listItem: 2
                })
                break;

        }
    }
    setClassName(item) {
        let nextPage = this.props.toNextPage ? "li-out" : "";
        let linkActive = this.state.listItem === item ? "li-active" : "";
        if (item === 1) return `${nextPage}`;
        return `${nextPage} ${linkActive}`
    }

    render () {
        return (
            <div className="project-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Projects</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <ul>
                        <div className="overflow-container">
                            <li className={`li-1 ${this.setClassName(1)}`}>My works:</li>
                        </div>
                        <div className="overflow-container">
                            <li className={`li-2 ${this.setClassName(2)}`} onClick={this.handleClick}>Bow to the Sound - Year of the Dog</li>
                        </div>
                        <div className="overflow-container">
                            <li className={`li-3 ${this.setClassName(3)}`} onClick={this.handleClick}>She Makes me Feel - Year of the Dog</li>
                        </div>
                        <div className="overflow-container">
                            <li className={`li-4 ${this.setClassName(4)}`} onClick={this.handleClick}>Sex Education does Romeo and Juliet</li>
                        </div>
                        <div className="overflow-container">
                            <li className={`li-5 ${this.setClassName(5)}`} onClick={this.handleClick}>Sweet Songs of Survival - Monc</li>
                        </div>
                        <div className="overflow-container">
                            <li className={`li-6 ${this.setClassName(6)}`} onClick={this.handleClick}>The Defender - Last Change Lawyer NYC Soundtrack</li>
                        </div>
                    </ul>
                    <div className="overflow-container">
                        <iframe className={this.props.toNextPage ? "iframe-out" : ""} src={this.state.videoSrc} title={this.state.videoTitle} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                    </div>
                </div>
            </div>
        )
    }
}