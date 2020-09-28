import React, { Component } from 'react'

export default class Testmonials extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="testmonials-wrapper">
                    <img className="testmonials-img" src={this.props.img} alt={this.props.heading} />
                    <p className="testmonials-text pt-3 pb-3">{this.props.text}</p>
                    <h1 className="">{this.props.heading}</h1>
                    <div className="testmonial-client-info">
                        <p>{this.props.clientname} / <span className="app-name">{this.props.appname}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
