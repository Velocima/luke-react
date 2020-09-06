import React from 'react';
import './Bio.css'

export class Bio extends React.Component {
    render () {
        return (
            <div className="bio-container">
                <div className="left">
                    <div className="overflow-container">
                        <h1>About</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="overflow-container">
                        <p>
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
