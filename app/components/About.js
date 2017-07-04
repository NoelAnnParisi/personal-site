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
      <section className="avenir tc mt6-ns mt5">
        <article className="relative mw7 center">
          <div>
            <p
              style={{
                // borderRadius: '40%',
                // backgroundColor: 'black',
                color: 'palevioletred',
                marginLeft: '5%',
                marginRight: '5%',
              }}
              className="tracked f4-ns f5 fw3 mv1-ns"
            >
              I'm a uniquely balanced human who approaches complex problems with
              a critical eye and curious spirit. Coffee in hand, I strive to
              build reliable, user-focused products. My unshakable vision of a
              more inclusive society fuels the enthusiasm I have for
              programming. My tool belt includes, but isn't limited to, all
              things Javascript/ES6, HTML5/CSS3, React, Node, Express, Webpack,
              MySQL/NoSQL, Git and project management. I've contributed to a
              mixture of projects ranging from a React Native mobile app to a
              website for a local start up. The handy GitHub icon below will
              lead you to all of my work. Those I've collaborated with describe
              me as reliable, empathetic and resolute. When not coding you can
              spot me adventuring about, at a farmer's markets, or indulging my
              feline in some one-on-one time. Personally, there's nothing more
              gratifying than rallying together to transform a forward-focused
              thought into code...besides the sporadic spoonful of sunflower
              seed butter. Seriously, try it!{' '}
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
