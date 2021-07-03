/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';

class CourseSection extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { sectionId: 'abcd' };
        console.log(props.match.params.sectionId);
    }

    render() {
        return (
            <div>
                <Link to="/course/abcd">
                    <button>ABCD</button>
                </Link>
                <Link to="/course/efgh">
                    <button>EFGH</button>
                </Link>
                <Section sectionId={this.props.match.params.sectionId} />
            </div>
        );
    }
}

export default CourseSection;
