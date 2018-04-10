import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Home = () => (
  <Route exact path="/" render={() => <Redirect to="/components/" />} />
);

export default Home;
