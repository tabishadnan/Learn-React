import React, { Component } from 'react';
import logo from '../Assets/logo/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <nav class="navbar navbar-expand-md navbar-dark">
                        <a class="navbar-brand" href="#"><img src={logo} alt="React App" /></a>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Documentaion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Sign up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
