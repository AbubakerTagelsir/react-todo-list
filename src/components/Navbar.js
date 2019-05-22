import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg black">
                    <div className="contaner">
                        <a href="/" className="navbar-brand"><strong>Home</strong></a>
                    </div>
                </nav>
            </header>
        )
    }
}
