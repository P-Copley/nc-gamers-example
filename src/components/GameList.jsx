import axios from 'axios';
import React, { Component } from 'react';
import GameCard from './GameCard';
import Loader from './Loader';

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
      .get('https://northgamers.herokuapp.com/api/games', {
        params: { genre_slug, p: page },
      })
      .then(({ data: { games, total_count } }) => {
        this.setState({ games, isLoading: false, total_count });
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
    const newSlug = prevProps.genre_slug !== this.props.genre_slug;
    if (newSlug || newPage) {
      this.fetchGames();
    }
  }

  render() {
    const { games, isLoading, page, total_count } = this.state;
    const { genre_slug } = this.props;
    const listTitle = genre_slug || 'All';

    console.log(page);
    const pageCount = Math.ceil(total_count / 5);
    const atStart = page === 1;
    const atEnd = page === pageCount;

    if (isLoading) return <Loader />;
    return (
      <main>
        <h3>{listTitle} games</h3>
        {games.map((game) => {
          return <GameCard {...game} key={game.game_id} />;
        })}
        <section className="pagination-container">
          <button
            disabled={atStart}
            onClick={() => this.setPage(page - 1)}
            className="pagination-arrow"
          >
            {'<'}
          </button>
          <p>{page}</p>
          <button
            onClick={() => this.setPage(page + 1)}
            className="pagination-arrow"
            disabled={atEnd}
          >
            {'>'}
          </button>
        </section>
      </main>
    );
  }
}

export default GameList;
