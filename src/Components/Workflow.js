import React, { Component } from 'react'

export default class Workflow extends Component {
    render(props) {
        return (
            <div className="col-4 text-center workflow-wrapper">
                <img src={this.props.img} alt={this.props.heading} />
                <h4 className="text-center pt-3">{this.props.heading}</h4>
                <p className="text-center">{this.props.text}</p>
            </div>
        )
    }
}
