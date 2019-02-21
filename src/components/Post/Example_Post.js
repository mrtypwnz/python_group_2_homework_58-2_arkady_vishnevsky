import React, {Component} from 'react';
import './Post.css';

class Example_Post extends Component {
    render() {
        return (
            <article className="Joke">
                <h1 className='chuck_norris'>ChuckNorris joke: </h1>
                <p>{this.props.title}</p>
            </article>
        );
    }
}

export default Example_Post;