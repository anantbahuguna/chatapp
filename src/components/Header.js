import React, { Component } from 'react'
import M from 'materialize-css'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-1">
                <a href="#" className="brand-logo">{this.props.myText}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
             </nav>
        )
    }
}

export default Header