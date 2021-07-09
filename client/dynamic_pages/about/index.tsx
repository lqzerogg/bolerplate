import React from 'react';
import { Route } from "react-router-dom";
import loadable from "@loadable/component";

const About = loadable(() => import(/* webpackPrefetch: true */ './About'))
const route = '/about'

export default (
  <Route key={route} path={route}>
    <About />
  </Route>
)
