/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <button
                onClick={() => {
                    console.log('home clicked');
                    props.onClick('home');
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    console.log('clock clicked');
                    props.onClick('clock');
                }}
            >
                Clock
            </button>
            <button
                onClick={() => {
                    console.log('course clicked');
                    props.onClick('course-section');
                }}
            >
                Course
            </button>
        </nav>
    );
}

export default NavBar;
