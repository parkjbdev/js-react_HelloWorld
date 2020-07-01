import React from "react";
import './ch05.css';
// import 'bootstrap/dist/css/bootstrap.css'
import PuffLoader from "react-spinners/PuffLoader"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 6000);
    }

    render() {
        return (
            <div className="container">
                <PuffLoader
                    size={150}
                    color={"#123abc"}
                    loading={this.state.isLoading}
                />
            </div>
        );
    };
}

export default App;