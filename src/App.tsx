import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Advertisement from './views/Advertisement';
import Overview from './views/Overview';

export default class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Grid container>
          <Grid xs={12} item>
            <Navbar />
          </Grid>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8} style={{ marginTop: 15 }}>
            <Switch>
              <Route path="/" exact>
                <Overview />
              </Route>
              <Route path="/category/:category/:id">
                <Advertisement />
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </BrowserRouter>
    );
  }
}
