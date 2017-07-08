import React, {Component} from 'react'
import styled from 'styled-components'
import Icons from './Icons'

const StyledSection = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
`

const StyledText = styled.p`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  color: #bc8f8f;
`
const StyledA = styled.a`
  font-family: 'Raleway', sans-serif;
  color: #bc8f8f;
  display: ${props => (props.showElipses === false ? 'none' : null)}
  &:hover {
    cursor: pointer;
  }
`

const ReadMore = styled.div`
  display: ${props => (props.readMore === false ? 'none' : null)};
`
const ReadMoreP = StyledText.extend``

const StyledDiv = styled.div`
  background: linear-gradient(
    rgba(255, 238, 238, 0.5),
    rgba(221, 239, 187, 0.5)
  );
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled.a`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  color: #bc8f8f;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.45s;
    transform: scale(1.4);
  }
`

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exitHover: false,
      showMore: false,
      showElipses: true,
    }
    this.toggleExitHover = this.toggleExitHover.bind(this)
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }
  toggleExitHover() {
    this.setState({
      exitHover: !this.state.exitHover,
    })
  }

  toggleShowMore() {
    this.setState({
      showMore: true,
      showElipses: false,
    })
  }

  render() {
    return (
      <StyledSection>
        <article className="center mw7">
          <div>
            <StyledText className="tracked lh-copy f4-ns f5 fw9 mv1-ns ml0-l ml4 mr0-l mr4">
              I'm a uniquely balanced human who approaches complex problems with
              a critical eye and curious spirit. Coffee in hand, I strive to
              build reliable, user-focused products. My enthusiasm for
              programming is fueled by an unshakable vision of a more inclusive
              society. My tool belt includes, but isn't limited to, all things
              Javascript/ES6, HTML5/CSS3, React, Node, Express, Webpack,
              MySQL/NoSQL, Git and project management. I've contributed to a
              variety of projects
            </StyledText>
            <StyledA
              showElipses={this.state.showElipses}
              onClick={this.toggleShowMore}
            >
              ...read on...
            </StyledA>
            <ReadMore readMore={this.state.showMore}>
              <ReadMoreP className="tracked lh-copy f4-ns f5 fw9 mv1-ns ml0-l ml4 mr0-l mr4">
                ranging from a website for a local start up to a React Native
                mobile app. The GitHub icon will lead you to all of my work.
                Those I've collaborated with describe me as reliable, empathetic
                and resolute. When not coding I'm adventuring about,
                experimenting in the kitchen, or indulging my feline in some
                one-on-one time. Personally, there's nothing more gratifying
                than rallying together to transform a forward-focused thought
                into code...besides the sporadic spoonful of sunflower seed
                butter. Seriously, try it!{' '}
              </ReadMoreP>
            </ReadMore>
          </div>
        </article>
        <StyledDiv className="mt2 mt3-ns f4-ns f5 fw9">
          <StyledLink
            onMouseEnter={this.toggleExitHover}
            onMouseLeave={this.toggleExitHover}
            onClick={this.props.close}
          >
            <i className="fa fa-arrow-left" style={{size: '30px'}} />
          </StyledLink>
        </StyledDiv>
        <Icons />
      </StyledSection>
    )
  }
}
