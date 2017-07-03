import React, {Component} from 'react'

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
      <section className="avenir tc mt6 ">
        <article className="relative mw7 center">
          <div>
            <p style={{color: 'palevioletred'}} className="f4 mv1">
              I'm a mission-driven full stack developer who lives on coffee &
              strives to create reliable, user-focused products. My tools of
              choice include, but aren't limited to: Javascript/ES6, HTML5/CSS3,
              React.js, Node.js, Express.js, Webpack and MySQL/NoSQL. I've
              contrbuited to a variety of projects ranging from a React Native
              mobile app to a website for a local start up. I've also flexed my
              backend muscles on a project called GitLists. All of which can be
              found by clicking the handy GitHub icon below. I constantly seek
              to expand my knowledge & grow as a developer and person. Others
              say my uplifting nature and ability to build rapport are my
              greatest qualities. For me, there's nothing sweeter than working
              together to reach a common goal...besides the occassional spoonful
              of sunflower seed butter.{' '}
              <a
                onMouseEnter={this.toggleExitHover}
                onMouseLeave={this.toggleExitHover}
                style={{
                  color: 'cyan',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={this.props.close}
              >
                Thanks for reading!
              </a>
            </p>
          </div>
        </article>
      </section>
    )
  }
}
