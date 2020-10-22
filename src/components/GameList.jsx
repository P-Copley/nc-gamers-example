import axios from 'axios';
import React, { Component } from 'react';
import GameCard from './GameCard';
import Loader from './Loader';
import Pagination from './Pagination';

class GameList extends Component {
  state = {
    games: [],
    isLoading: true,
    page: 1,
    total_count: 0,
  };

  // updateStarsForOneGame = (game_id, voteValue) => {
  //   this.setState((currentState) => {
  //     const updatedGames = currentState.games.map((game) => {
  //       const gameCopy = { ...game };
  //       if (gameCopy.game_id === game_id) {
  //         gameCopy.stars = gameCopy.stars + voteValue;
  //       }
  //       return gameCopy;
  //     });
  //     return { games: updatedGames };
  //   });
  // };

  fetchGames = () => {
    const { genre_slug } = this.props;
    const { page } = this.state;
    axios
      .get(`https://northgamers.herokuapp.com/api/games`, {
        params: { genre_slug, p: page },
      })
      .then(({ data: { games, total_count } }) => {
        this.setState({ games, total_count, isLoading: false });
      });
  };

  setPage = (newPage) => {
    this.setState({ page: newPage });
  };

  componentDidMount() {
    this.fetchGames();
  }

  componentDidUpdate(prevProps, prevState) {
    const newPage = prevState.page !== this.state.page;
    const newGenre = prevProps.genre_slug !== this.props.genre_slug;
    if (newGenre || newPage) {
      this.fetchGames();
    }
  }

  render() {
    const { games, isLoading, page, total_count } = this.state;
    const { genre_slug } = this.props;
    const listTitle = genre_slug || 'All';
    if (isLoading) return <Loader />;

    return (
      <main>
        <h3>{listTitle} games</h3>
        {games.map((game) => {
          return <GameCard {...game} key={game.game_id} />;
        })}
        <Pagination
          total_count={total_count}
          page={page}
          setPage={this.setPage}
        />
      </main>
    );
  }
}

export default GameList;
