/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import Section from './Section';
import NavBar from './NavBar';
import LoginControl from './LoginControl';
import Clock from './Clock';
import CourseSection from './CourseSection';

class CustomRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 'home' };
    }

    clickHandler = (value) => {
        console.log(`click handler ${value}`);
        this.setState({ page: value });
    };

    render() {
        const { page } = this.state;
        console.log(`rendering ${page}`);
        let currentComponent;
        switch (page) {
            case 'course-section':
                currentComponent = <CourseSection />;
                break;
            case 'clock':
                currentComponent = <Clock />;
                break;
            default:
                currentComponent = <LoginControl />;
                break;
        }
        return (
            <div>
                <NavBar onClick={this.clickHandler} />
                <div>{currentComponent}</div>
            </div>
        );
    }
}

export default CustomRouter;
