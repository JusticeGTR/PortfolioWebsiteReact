import React from "react";

export function Navbar() {
    return (
        <nav className="navList">
            <a href="/" className="navItems rightBorder">Justin Lindsey</a>
            <a href="#aboutMe" className="navItems leftBorder">About Me</a>
            <a href="#work" className="navItems">Work</a>
            <a href="#contact" className="navItems">Contact</a>
            <a href="#resume" className="navItems">Resume</a>
        </nav>
    )
}

export default Navbar;