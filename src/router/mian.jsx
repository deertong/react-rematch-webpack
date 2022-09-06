import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from '~/components/layout'
import Home from '~/pages/home'
export default class mian extends Component {
  render() {
    return (
      <Layout>
        <Switch >
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </Layout>
    )
  }
}
