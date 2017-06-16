import React from 'react';

export default class Opinions extends React.Component {
	render() {
		return(
			<section className='page-2'>
        <div className="tc ph4">
          <h1 className="opinions f5 f2-m f1-l fw2 black mv3 mt3-l">
            What others think...
          </h1>
        </div>
        <div className="w3-content w3-display-container">
          <article className="mySlides mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="../assets/img/GT.png" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
              <h1 className="opinions f4">GT Deng</h1>
              <h2 className="opinions f6">Front End Engineer @ LOYAL3</h2>
            </div>
            <p className="opinions lh-copy measure center f6 black-70">
              Noel is an extremely talented individual whose analytical skills are top-notch. She has an amazing ability to get things done and ship clean functional code. Furthermore, Noel is an extremely quick learner; she has been able to pick up React and over
              the weekend, build out a functional front end. With a solid technical mind, a unique background and the drive to succeed, Noel would be an excellent addition to any team.
            </p>
          </article>
        </div>
    </section>
		)
	}
}