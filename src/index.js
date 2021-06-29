/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// eslint-disable-next-line no-unused-vars
// const name = 'Elon Musk';
// function formatName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//     firstName: 'Elon',
//     lastName: 'Musk',
// };
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }
// const element = (
//     <div id="greeting" className="greeting-statement">
//         {getGreeting(user)}
//         <h3>Welcome</h3>
//     </div>
// );
// const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
function Hello() {
    return <span>Hello</span>;
}
function Welcome(props) {
    return (
        <h1>
            <Hello />, {props.name}
        </h1>
    );
}
const element = (
    <div>
        <Welcome name="Sumedha" />
        <Welcome name="ABC" />
        <Welcome name="XYZ" />
    </div>
);
ReactDOM.render(element, document.getElementById('root'));

// const element = <h1>Hello, {2 + 2}</h1>;
// ReactDOM.render(element, document.getElementById('root'));
