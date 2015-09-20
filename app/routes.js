import Layout from './components/Layout';
import Home from './components/Home';
import React from 'react';
import playground from './utils/displayPlayground';
import NotFound from './components/NotFound';

let examples = [
  'buttons',
  'alerts',
  'breadcrumb',
  'form',
  'inputs',
  'labels',
  'listgroup',
  'pagination',
  'panel',
  'progressbar',
  'tables',
  'tabs',
  'typography'
];


const NotFoundRoute = {
  path: '*',
  component: NotFound
};

const HomeRoute = {
  path: '/',
  component: Home
};

let childRoutes = [ ];

examples.forEach((example) => {
  let exampleText = require(`raw!../examples/${example}.example`);
  let route = {
    path: `/${example}`,
    component: playground(exampleText, "", {React})
  };
  console.log(route);
  childRoutes.push(route);
});

export default {
  path: '/',
  component: Layout,
  indexRoute: HomeRoute,
  childRoutes
};
