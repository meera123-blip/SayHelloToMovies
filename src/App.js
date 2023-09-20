import React from 'react';
import SearchHome from './components/SearchHome';
import SearchList from './components/SearchList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieOverView from './components/MovieOverView';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SearchHome />} />
      <Route path="/search/:query" element={<SearchList />} />
      <Route path="/movie/:id" element={<MovieOverView/>} />
    </Routes>
  </Router>
  );
};

export default App;
