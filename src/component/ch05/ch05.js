import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        //console.log('hello');
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log('component rendered');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component updated');
    }
    componentDidCatch(error, errorInfo) {

    }
    componentWillUnmount() {
        console.log('bye!');
    }

    add = () => {
        console.log('add');
        this.setState({
            count: this.state.count + 1,
        })
    };

    minus = () => {
        console.log('minus');
        this.setState({
            count: this.state.count - 1,
        })
    };


    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    };
}

export default App;