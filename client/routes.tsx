import React from 'react';
import homeRoute from './home';
import about from './dynamic_pages/about'
import { Link, Route, Switch, withRouter } from 'react-router-dom';

type Page = {
  name: string;
  path: string;
};
function About() {
  return <div>About</div>;
}
function Detail() {
  return <div>Details</div>;
}
const pages: Page[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Detail', path: '/detail' },
];

const routes = [
  homeRoute,
  about,
  <Route key="/detail" path="/detail">
    <Detail />
  </Route>,
];

export { pages, routes };
