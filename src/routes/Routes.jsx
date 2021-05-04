import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Autoposting } from '../pages/Autoposting';
import { Socials } from '../pages/Autoposting/Socials';
import { Error404 } from '../pages/Error404';
import { Statistics } from '../pages/Statistics';
import { Partners } from '../pages/Partners';
import { AdNetwork } from '../pages/AdNetwork';
import { PostFeed } from '../pages/Autoposting/PostFeed';
import { Scheduler } from '../pages/Autoposting/Scheduler';
import { Proxy } from '../pages/Autoposting/Proxy';
import { Drafts } from '../pages/Autoposting/Drafts';

import { Statistics as AutopostingStatistics } from '../pages/Autoposting/Statistics';

const Routes = () => (
  <>
    <Switch>
      <Redirect exact from="/" to="/autoposting/socials" />
      <Route exact path="/autoposting/socials" component={Socials} />
      <Route exact path="/autoposting/post-feed" component={PostFeed} />
      <Route exact path="/autoposting/statistics" component={AutopostingStatistics} />
      <Route exact path="/autoposting/scheduler" component={Scheduler} />
      <Route exact path="/autoposting/proxy" component={Proxy} />
      <Route exact path="/autoposting/drafts" component={Drafts} />

      <Route exact path="/autoposting" component={Autoposting} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/partners" component={Partners} />
      <Route path="/ad-networks" component={AdNetwork} />

      <Route exact path="/error" component={Error404} />
      <Route path="*" component={Error404} />
    </Switch>
  </>
);

export default Routes;
