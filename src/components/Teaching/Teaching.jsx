import React from 'react';
import '../../css/Teaching.css';


export class Teaching extends React.Component {
    render () {
        return (
            <div className="teaching-container">
                <div className={this.props.toNextPage ? "left left-out" : "left"}>
                    <div className="overflow-container">
                        <h1 className={this.props.toNextPage ? "drop-down" : ""}>Teaching</h1>
                    </div>
                </div>
                <div className={this.props.toNextPage ? "right right-out" : "right"}>
                    <div className="overflow-container">
                        <p className={this.props.toNextPage ? "drop-down" : ""}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt dolor, ipsam repudiandae ad aliquam porro nam repellendus. Ex harum odit quisquam neque cumque voluptas adipisci ab alias ducimus aperiam?
                            <br/>
                            <br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae aut, esse accusantium id est reprehenderit cumque optio cupiditate quasi perspiciatis! Dignissimos rem facere dolorem qui reprehenderit eius libero omnis!
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
