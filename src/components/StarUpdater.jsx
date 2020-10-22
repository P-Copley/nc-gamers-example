import React from 'react';
import { increaseStarsById } from '../api';

class StarUpdater extends React.Component {
  state = {
    usersVoteCount: 0,
  };

  handleVote = (voteValue) => {
    // optimistically show users vote
    this.setState((currentState) => {
      return { usersVoteCount: currentState.usersVoteCount + voteValue };
    });

    const { game_id } = this.props;
    // do the api request
    increaseStarsById(game_id, voteValue).catch(() => {
      // undo the users votes if it goes wrong
      this.setState((currentState) => {
        return { usersVoteCount: currentState.usersVoteCount - voteValue };
      });
    });
  };

  render() {
    const { stars } = this.props;
    const { usersVoteCount } = this.state;
    return (
      <div>
        <button onClick={() => this.handleVote(1)} value={1}>
          Vote UP
        </button>
        <p>Stars: {stars + usersVoteCount}</p>
        <button
          onClick={() => this.handleVote(-1)}
          value={-1}
          disabled={usersVoteCount === -1}
        >
          Vote DOWN
        </button>
      </div>
    );
  }
}

export default StarUpdater;
