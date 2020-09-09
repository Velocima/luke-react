import React from 'react';
import './Contact.css'

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail() {
    }

    render () {
        return (
            <div className="contact-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Contact</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <div className="overflow-container">
                        <form action="">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"/>
                            <label htmlFor="subject">subject</label>
                            <input type="text" id="subject"/>
                            <label htmlFor="email">Email</label>
                            <input type="mail" id="subject"/>
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
