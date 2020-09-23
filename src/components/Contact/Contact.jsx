import React from 'react';
import '../../css/Contact.css';


export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            subject: "",
            email: "",
        }
        this.sendMail = this.sendMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }
    async sendMail(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: {
                    name, 
                    email, 
                    subject, 
                    message,
                }
            })
        }

        const response = await fetch("http://maxemailserver.com/api/sendmail/luke", requestOptions);

        console.log(response)
    
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
                        <form onSubmit={this.sendMail}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} required/>
                            <label htmlFor="subject">subject</label>
                            <input type="text" id="subject" onChange={this.handleChange} required/>
                            <label htmlFor="email">Email</label>
                            <input type="mail" id="email" onChange={this.handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                            <label htmlFor="message">Message</label>
                            <textarea type="text" id="message" onChange={this.handleChange} required/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
