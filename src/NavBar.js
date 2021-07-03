/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <a href="/">
                <button>Home</button>
            </a>
            <a href="/clock">
                <button>Clock</button>
            </a>
            <a href="/course/abcd">
                <button>Course</button>
            </a>
        </nav>
    );
}

export default NavBar;
