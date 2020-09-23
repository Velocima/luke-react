import React from 'react';
import '../../css/Bio.css';


export class Bio extends React.Component {
    render () {
        return (
            <div className="bio-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>About</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <div className="overflow-container">
                        <p className={this.props.toNextPage ? "drop-down" : ""}>
                            Luke Hartley is a freelance drummer and educator from Monmouthshire, Wales. He has featured on the soundtrack of the Netflix original series Sex Education and worked with composer Justin Nicholls (Grand Designs, One Born Every Minute) on the BBC documentary Last Chance Lawyer NYC. He is a member of the band Year of the Dog and is currently based in Bristol.
                            <br></br>
                            <br></br>
                            After growing up next to the famous Rockfield Studios he studied at the Royal Welsh College of Music and Drama with world class drummers Joshua Blackmore, James Maddren, Martin France, Mark O’Connor and Elliot Bennett. He graduated with a first class honour degree in Jazz and now carries on his work as a musician and educator.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
