import React, {Component, Fragment} from 'react';
import './Joke.css';
import Example_Post from '../../components/Post/Example_Post';


class Joke extends Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        const JOKES_URL = 'https://api.chucknorris.io/jokes/random';
        fetch(JOKES_URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(jokes => {
            this.setState({jokes: jokes})
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
    console.log(this.state);
        return (
            <Fragment>
                <section className="Jokes">
                    <Example_Post
                        key={this.state.jokes.id}
                        title={this.state.jokes.value}/>
                </section>
            </Fragment>
        )
    }
}


export default Joke;