import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://northgamers.herokuapp.com/api',
});

export const getGameById = (game_id) => {
  return instance.get(`/games/${game_id}`);
};

export const increaseStarsById = (game_id, voteValue) => {
  return instance.patch(`/games/${game_id}`, {
    star: voteValue,
  });
};
