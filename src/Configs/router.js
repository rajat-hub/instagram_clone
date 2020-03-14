import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Login, Dashboard, Register, Reset, App, Post } from '../Components';

export const Routers = () => (
  <BrowserRouter basename="/react-userprofile-routing">
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/profile" component={Dashboard} />
      <Route path="/reset" component={Reset} />
      <Route path="/posts" component={Post} />
    </div>
  </BrowserRouter>
);
