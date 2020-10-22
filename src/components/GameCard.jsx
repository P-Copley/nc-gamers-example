import { Link } from '@reach/router';
import React from 'react';
import StarUpdater from './StarUpdater';

const GameCard = (props) => {
  return (
    <section className="game-card">
      <Link to={`/game/${props.game_id}`}>{props.game_title} </Link>
      <StarUpdater stars={props.stars} game_id={props.game_id} />
    </section>
  );
};

export default GameCard;
