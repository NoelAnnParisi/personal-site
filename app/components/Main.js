import React from 'react'
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import Home from '../container/Home'

export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              render={() => {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
