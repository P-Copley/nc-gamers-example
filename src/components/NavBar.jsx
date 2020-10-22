import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class NavBar extends Component {
  state = {
    genres: [],
  };
  componentDidMount() {
    axios
      .get('https://northgamers.herokuapp.com/api/genres')
      .then(({ data: { genres } }) => {
        this.setState({ genres });
      });
  }

  render() {
    const { genres } = this.state;

    return (
      <nav>
        {genres.map((genre) => {
          return (
            <Link to={`/genres/${genre.genre_slug}`} key={genre.genre_id}>
              <button>{genre.genre_name}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
