import React from 'react';
import { Route } from 'react-router-dom';

const Details = import('./Details');
const path = '/details';

function loadData() {
  return new Promise((resolve) => {
    global.setTimeout(resolve, 2000);
  });
}

export default {
  path,
  component: Details,
  loadData,
};
