import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), name: 'DD' };
    }

    componentDidMount() {
        this.sumedha = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.sumedha);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    changeName = () => {
        this.setState({ name: 'Sumedha' });
    };

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
                {/* <h1>Hello, {this.changeName}</h1>; */}
            </div>
        );
    }
}

export default Clock;
