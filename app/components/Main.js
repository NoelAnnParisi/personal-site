import React from 'react';
import SocialMedia from './SocialMediaIcons';
import About from './About';
import Opinions from './Opinions';


export default class Main extends React.Component {
	render(){
		return(
      <div>
        <SocialMedia />
        <About />
        <Opinions />
      </div>
		)
	}
}