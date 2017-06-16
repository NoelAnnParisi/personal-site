import React from 'react';

export default class About extends React.Component {
	render (){
		return(
			 <div className="vh-100 dt w-100">
          <div className="dtc pt0 v-mid ph3 ph4-m ph5-l">
            <h1 className="header tc f3 f-subheadline-l measure lh-title fw3">
              Noel Parisi
            </h1>
            <h2 className="tc f3 fw4 black" id="target"></h2>
            <div className="tc pa2-ns">
              <article className="hide-child relative b--black-20 mw6 center">
                <div className="bio measure-wide">
                  Mission-driven developer who thrives on creating robust products with Javascript, responsive HTML/CSS, 
                  React.js, Node.js, Express.js, and MySQL/NoSQL. I constantly seek to expand my knowledge and grow as a 
                  person. Others say my uplifting nature and ability
                  to build rapport is invigorating. I love collaborating and bringing ideas to life!
                </div>
              </article>
            </div>
          </div>
        </div>
		  )
	 }
}