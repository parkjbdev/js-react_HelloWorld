import React from "react";
import '../../css/MovieApp/MovieApp.css';
import 'bootstrap/dist/css/bootstrap.css'
import PuffLoader from "react-spinners/PuffLoader"
import axios from 'axios';
import Movie from "./Movie";

class MovieApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: [],
        }
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

        this.setState({movies});
        this.setState({isLoading: false});
        console.log("Loading Successful");
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;

        return (
            <section className="container">
                {
                    isLoading ?
                        (<div className="loader">
                            <PuffLoader className={"loader"} size={150} color={"#123abc"}
                                        loading={this.state.isLoading}/>
                        </div>)
                        :
                        (<div className="movies row">
                        {
                            movies.map(movie => {
                            return <Movie
                                key={movie.id}
                                poster={movie.medium_cover_image}
                                summary={movie.summary}
                                year={movie.year}
                                id={movie.id}
                                title={movie.title} />
                            })
                        }
                        </div>)
                }
            </section>
        );
    };
}

export default MovieApp;