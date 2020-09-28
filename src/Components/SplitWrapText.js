import React, { Component } from 'react'

export default class SplitWrapText extends Component {
    render() {
        return (
            <div className="col-6 align-middle align-items-center justify-content-center">
                <p className="split-subheading">{this.props.subheading}</p>
                <h3>{this.props.heading}</h3>
                <p className="split-text">{this.props.text}</p>
            </div>  
        )
    }
}
