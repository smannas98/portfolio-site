import React, { Component } from 'react';
import Link from 'next/link';
import '../static/bulma.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand">
                    <img src="/static/pabu.png" width="112" height="28" />
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link href="/home">
                            <a>Home</a>
                        </Link>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                        <Link href="/contact">
                            <a>Contact Me</a>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a href="https://google.com">
                            <img src="/static/pabu.png" width="160" height="28" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;