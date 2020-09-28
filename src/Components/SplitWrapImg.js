import React, { Component } from 'react'

export default class SplitWrapImg extends Component {
    render() {
        return (
            <div className="col-6 text-center">
                <img className="split-img" src={this.props.img} alt={this.props.heading} />
            </div>
        )
    }
}
