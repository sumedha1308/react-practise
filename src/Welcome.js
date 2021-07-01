import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Sumedha' };
    }

    render() {
        return <h1>Hello, {this.state.name}</h1>;
    }
}

export default Welcome;
