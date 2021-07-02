/* eslint-disable no-unused-vars */
import React from 'react';
import Section from './Section';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sectionId: 'abcd' };
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({ sectionId: 'abcd' });
                    }}
                >
                    ABCD
                </button>
                <button
                    onClick={() => {
                        this.setState({ sectionId: 'efgh' });
                    }}
                >
                    EFGH
                </button>
                <Section id={this.state.sectionId} />
            </div>
        );
    }
}

export default Page;
