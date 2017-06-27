import React from 'react'
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import About from './About'
import Home from '../container/Home'
import Opinions from './Opinions'
import Portfolio from './Portfolio'

const AppContainer = styled.div`
  height:100vh;
  width: 100vw;
  margin: 0 auto;
  background: linear-gradient(palevioletred, papayawhip);
`

export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/opinions" component={Opinions} />
            <Route path="/portfolio" component={Portfolio} />
            <Route
              render={() => {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    )
  }
}
