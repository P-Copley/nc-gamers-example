import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import GameList from './components/GameList';
import SingleGame from './components/SingleGame';
import ErrorDisplay from './components/ErrorDisplay';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <GameList path="/" />
        <GameList path="/genres/:genre_slug" />
        <SingleGame  path="/game/:game_id"/>
        <ErrorDisplay default status={404} message="This page doesn't exist"/>
      </Router>
    </div>
  );
};

export default App;
