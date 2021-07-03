/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './Item';
// import LoginControl from './Greeting';
import Mailbox1 from './MailBox';
import Welcome from './Welcome';
import LoginControl from './LoginControl';
import Clock from './Clock';
import CourseSection from './CourseSection';
import NameForm from './NameForm';
import NavBar from './NavBar';
import CustomRouter from './CustomRouter';
// import { render } from '@testing-library/react';

// function Button(props) {
//     const handleClick = (event, id) => {
//         // eslint-disable-next-line no-console
//         console.log(event.target, id);
//     };

//     return <button onClick={(event) => handleClick(event, props.id)}>{props.name}</button>;
// }
// const element = (
//     <div>
//         <Button name="Button 1" id="button-1" />
//         <Button name="Button 1" id="button-2" />
//         <Button name="Button 1" id="button-3" />
//     </div>
// );

// ReactDOM.render(element, document.getElementById('root'));

// const element = <h1>Hello, {2 + 2}</h1>;
// ReactDOM.render(element, document.getElementById('root'));

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
const links = [
    { title: 'Google', link: 'https://google.com' },
    { title: 'Facebook', link: 'https://facebook.com' },
    { title: 'Twitter', link: 'https://twitter.com' },
];

// const listItems1 = links.map((element) => <Item link={element.link} title={element.title} />);
// Warning  for key that key should be unique for a list hence added key here
// We can use index but disadvantage of index would be if we add new element then index of all element changes that is not optimal
// {links.map((element, index) => (
//   <Item key={index} link={element.link} title={element.title} />
//   ))}
// react uses key property to uniqely identify each element
// when loop is there use key
const element = (
    <div>
        {/* {links.map((element) => (
            <Item key={element.title} link={element.link} title={element.title} />
        ))} */}
        <NameForm />
    </div>
);

// ReactDOM.render(element, document.getElementById('root'));
// const messages = ['React', 'Re: React', 'Re:Re: React', 'Sumedha', 'DDD'];

// ReactDOM.render(<LoginControl isLoggedIn={false} />, document.getElementById('root'));
// ReactDOM.render(<Mailbox1 unreadMessages={messages} />, document.getElementById('root'));
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={true} />,
//     document.getElementById('root'),
// );
// Code for Router

const elementRouter = <CustomRouter />;

ReactDOM.render(elementRouter, document.getElementById('root'));
