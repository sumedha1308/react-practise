/* eslint-disable no-console */
import React from 'react';

const sectionData = {
    abcd: { content: 'ABCD' },
    efgh: { content: 'EFGH' },
};

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: '', error: null };
    }

    fetchData() {
        console.log('Fetching Data: ', this.props.sectionId);
        const sectionId = this.props.sectionId;
        // fetch(`/api/section/${sectionId}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.setState({ content: data });
        //     })
        //     .catch();
        this.setState({ content: sectionData[sectionId].content });
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, _prevState) {
        if (this.props.id !== prevProps.id) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
                {this.state.content}
                {/* <h1>Hello, {this.changeName}</h1>; */}
            </div>
        );
    }
}

export default Section;
