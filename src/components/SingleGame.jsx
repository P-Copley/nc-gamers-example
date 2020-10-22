import React, { Component } from 'react';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';
import { getGameById } from '../api';
import StarUpdater from './StarUpdater';

class SingleGame extends Component {
  state = {
    gameInfo: {},
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    getGameById(this.props.game_id)
      .then(({ data }) => {
        this.setState({ gameInfo: data.game, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            message: response.data.msg,
          },
        });
      });
  }

  render() {
    const { gameInfo, isLoading, error } = this.state;
    console.log(error);
    if (error) return <ErrorDisplay {...error} />;
    if (isLoading) return <Loader />;
    return (
      <main className='single-game-page'>
        <h2>{gameInfo.game_title}</h2>
        <p>{gameInfo.genre}</p>
        <p>
          Released in {gameInfo.game_release_year} for the {gameInfo.console}
        </p>
        <img src={gameInfo.image_url} alt={`${gameInfo.game_title} box art`} />
        <StarUpdater stars={gameInfo.stars} game_id={gameInfo.game_id} />
        <p>{gameInfo.number_of_reviews} reviews</p>
      </main>
    );
  }
}

export default SingleGame;
