import React, {Component} from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  color: #bc8f8f;
`
const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    transition: 1.5s;
    transform: scale(1.2);
  }
`

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exitHover: false,
    }
    this.toggleExitHover = this.toggleExitHover.bind(this)
  }
  toggleExitHover() {
    this.setState({
      exitHover: !this.state.exitHover,
    })
  }
  render() {
    return (
      <section className="mt5">
        <article className="relative mw7 center">
          <div>
            <StyledText className="tracked lh-copy f4-ns f5 fw9 mv1-ns ml0-l ml4 mr0-l mr4">
              I'm a uniquely balanced human who approaches complex problems with
              a critical eye and curious spirit. Coffee in hand, I strive to
              build reliable, user-focused products. My enthusiasm for
              programming is fueled by an unshakable vision of a more inclusive
              society. My tool belt includes, but isn't limited to, all things
              Javascript/ES6, HTML5/CSS3, React, Node, Express, Webpack,
              MySQL/NoSQL, Git and project management. I've contributed to a
              variety of projects ranging from a website for a local start up to
              a React Native mobile app. The GitHub icon below will lead you to
              all of my work. Those I've collaborated with describe me as
              reliable, empathetic and resolute. When not coding I'm adventuring
              about, experimenting in the kitchen, or indulging my feline in
              some one-on-one time. Personally, there's nothing more gratifying
              than rallying together to transform a forward-focused thought into
              code...besides the sporadic spoonful of sunflower seed butter.
              Seriously, try it!{' '}
              <StyledLink
                onMouseEnter={this.toggleExitHover}
                onMouseLeave={this.toggleExitHover}
                onClick={this.props.close}
              >
                {'<' + 'ContinueClickingOnBackground' + ' />'}
              </StyledLink>
            </StyledText>
          </div>
        </article>
      </section>
    )
  }
}
