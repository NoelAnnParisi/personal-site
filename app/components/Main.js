import React from 'react'
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import Home from '../container/Home'
import About from './About'

export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              render={() => {
                return <Home />
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
