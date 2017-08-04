import React, {Component} from 'react'
import {Shake} from 'reshake'

export default class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverGithub: false,
      hoverLinkedIn: false,
      hoverTwitter: false,
    }
    this.toggleHoverGithub = this.toggleHoverGithub.bind(this)
    this.toggleHoverLinkedIn = this.toggleHoverLinkedIn.bind(this)
    this.toggleHoverAbout = this.toggleHoverAbout.bind(this)
  }
  toggleHoverGithub() {
    this.setState({
      hoverGithub: !this.state.hoverGithub,
    })
  }

  toggleHoverLinkedIn() {
    this.setState({
      hoverLinkedIn: !this.state.hoverLinkedIn,
    })
  }
  toggleHoverAbout() {
    this.setState({
      hoverTwitter: !this.state.hoverTwitter,
    })
  }
  render() {
    let gitHubcolor = '#bc8f8f'
    let gitHubStyle
    let linkedInColor = '#bc8f8f'
    let linkedinStyle
    let aboutColor = '#bc8f8f'
    let aboutStyle
    this.state.hoverGithub
      ? (gitHubStyle = {
          transition: '0.37s',
          transform: 'scale(1.3)',
        })
      : gitHubcolor && gitHubStyle
    this.state.hoverTwitter
      ? (aboutStyle = {
          transition: '0.37s',
          transform: 'scale(1.3)',
        })
      : aboutStyle && aboutColor
    this.state.hoverLinkedIn
      ? (linkedinStyle = {
          transition: '0.37s',
          transform: 'scale(1.3)',
        })
      : linkedInColor && linkedinStyle
    return (
      <div
        style={{zIndex: 5, display: 'flex'}}
        className="ph3 tc mt4 mb0-ns mb2"
      >
        <Shake
          h={0}
          v={7}
          r={21}
          dur={530}
          int={32.8}
          max={100}
          fixed={false}
          fixedStop={false}
          freez={true}
        >
          <a
            style={gitHubStyle}
            onMouseEnter={this.toggleHoverGithub}
            onMouseLeave={this.toggleHoverGithub}
            className="pointer relative link near-black hover-silver dib h2 w2 mr5"
            href="https://github.com/noelannparisi"
            title="GitHub"
            target="_blank"
          >
            <svg
              fill={gitHubcolor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
            </svg>
          </a>
        </Shake>
        <Shake
          h={0}
          v={7}
          r={21}
          dur={530}
          int={32.8}
          max={100}
          fixed={false}
          fixedStop={false}
          freez={true}
        >
          <a
            style={linkedinStyle}
            onMouseEnter={this.toggleHoverLinkedIn}
            onMouseLeave={this.toggleHoverLinkedIn}
            className="pointer relative link hover-silver near-black dib h2 w2 mr5"
            href="https://www.linkedin.com/in/noel-parisi/"
            target="_blank"
            title="LinkedIn"
          >
            <svg
              fill={linkedInColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path
                d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </Shake>
        <Shake
          h={0}
          v={7}
          r={21}
          dur={530}
          int={32.8}
          max={100}
          fixed={false}
          fixedStop={false}
          freez={true}
        >
          <a
            style={aboutStyle}
            onClick={(e)=>{this.props.handleClick(e)}}
            onMouseEnter={this.toggleHoverAbout}
            onMouseLeave={this.toggleHoverAbout}
            className="pointer about relative link hover-silver near-black dib h2 w2"
            target="_blank"
          >
            <svg
              fill={aboutColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="7 11 100 125"
              width="55"
              height="65"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path d="M49.987,34.42c0.758,1.311,2.358,2.007,4.624,2.007c0.675,0,1.402-0.073,2.151-0.191C57.919,39.279,59.7,41.2,61.73,41.2
            		c2.028,0,3.81-1.92,4.973-4.963c0.744,0.119,1.469,0.191,2.145,0.191c2.271,0,3.866-0.699,4.623-2.007
            		c1.021-1.756,0.244-4.251-1.804-6.778c2.053-2.527,2.824-5.024,1.804-6.776c-0.757-1.312-2.355-2.004-4.623-2.004
            		c-0.676,0-1.4,0.065-2.145,0.192c-1.163-3.051-2.944-4.972-4.973-4.972c-2.03,0-3.812,1.92-4.968,4.972
            		c-0.749-0.127-1.477-0.192-2.153-0.192c-2.268,0-3.864,0.693-4.622,2.004c-1.015,1.752-0.244,4.249,1.812,6.776
            		C49.739,30.169,48.973,32.664,49.987,34.42z M56.776,32.06c0.561,0.378,1.143,0.751,1.761,1.11c0.62,0.354,1.238,0.675,1.866,0.976
            		c-1.004,0.383-1.985,0.669-2.925,0.876C57.191,34.11,56.947,33.118,56.776,32.06z M61.73,40.139c-1.523,0-2.92-1.607-3.896-4.11
            		c1.248-0.283,2.564-0.713,3.896-1.279c1.33,0.566,2.646,0.996,3.896,1.279C64.65,38.532,63.257,40.139,61.73,40.139z
            		 M65.982,35.019c-0.939-0.206-1.916-0.493-2.925-0.876c0.625-0.302,1.246-0.622,1.864-0.976c0.618-0.356,1.202-0.729,1.768-1.11
            		C66.512,33.118,66.272,34.11,65.982,35.019z M68.848,19.922c1.843,0,3.159,0.521,3.709,1.47c0.757,1.317,0.066,3.321-1.608,5.423
            		c-0.857-0.93-1.891-1.852-3.055-2.733c-0.182-1.451-0.46-2.806-0.839-4.015C67.68,19.979,68.281,19.922,68.848,19.922z
            		 M68.031,25.556c0.825,0.685,1.569,1.383,2.203,2.086c-0.634,0.702-1.378,1.404-2.203,2.084c0.05-0.68,0.079-1.369,0.079-2.084
            		C68.113,26.929,68.081,26.241,68.031,25.556z M67.894,31.195c1.164-0.876,2.197-1.798,3.057-2.728
            		c1.675,2.098,2.368,4.106,1.606,5.42c-0.545,0.952-1.861,1.474-3.705,1.474c-0.565,0-1.167-0.06-1.795-0.149
            		C67.436,34.003,67.714,32.65,67.894,31.195z M66.689,23.225c-0.565-0.383-1.149-0.756-1.772-1.113
            		c-0.618-0.356-1.234-0.675-1.859-0.978c1.009-0.377,1.985-0.665,2.925-0.87C66.272,21.172,66.512,22.167,66.689,23.225z
            		 M61.73,15.141c1.521,0,2.92,1.607,3.896,4.116c-1.25,0.283-2.566,0.715-3.896,1.273c-1.332-0.558-2.648-0.99-3.896-1.273
            		C58.811,16.748,60.207,15.141,61.73,15.141z M57.479,20.266c0.939,0.206,1.921,0.493,2.925,0.872
            		c-0.628,0.301-1.243,0.621-1.861,0.977c-0.623,0.354-1.205,0.728-1.771,1.113C56.947,22.167,57.191,21.172,57.479,20.266z
            		 M56.575,24.667c0.78-0.57,1.608-1.121,2.493-1.633c0.885-0.511,1.774-0.957,2.662-1.354c0.885,0.397,1.774,0.843,2.66,1.354
            		c0.887,0.512,1.715,1.063,2.495,1.633c0.101,0.958,0.162,1.953,0.162,2.974c0,1.021-0.062,2.013-0.162,2.969
            		c-0.78,0.575-1.61,1.119-2.495,1.638c-0.881,0.506-1.775,0.955-2.66,1.355c-0.888-0.4-1.779-0.849-2.662-1.355
            		c-0.885-0.519-1.713-1.063-2.493-1.633c-0.101-0.958-0.164-1.953-0.164-2.976S56.475,25.627,56.575,24.667z M50.904,21.392
            		c0.548-0.949,1.864-1.47,3.705-1.47c0.567,0,1.17,0.055,1.797,0.146c-0.379,1.209-0.656,2.564-0.837,4.015
            		c-1.166,0.881-2.196,1.801-3.055,2.733C50.841,24.713,50.147,22.711,50.904,21.392z M55.431,29.724
            		c-0.828-0.68-1.57-1.382-2.209-2.082c0.639-0.703,1.381-1.404,2.204-2.088c-0.048,0.68-0.078,1.374-0.078,2.084
            		C55.348,28.355,55.378,29.044,55.431,29.724z M52.515,28.467c0.858,0.93,1.892,1.852,3.055,2.728
            		c0.181,1.456,0.458,2.806,0.837,4.016c-0.627,0.09-1.225,0.149-1.795,0.149c-1.843,0-3.159-0.521-3.707-1.474
            		C50.147,32.573,50.841,30.566,52.515,28.467z M59.203,27.642c0-1.399,1.129-2.527,2.527-2.527c1.396,0,2.527,1.128,2.527,2.527
            		c0,1.397-1.131,2.527-2.527,2.527C60.332,30.169,59.203,29.04,59.203,27.642z M36.874,9.582v11.924
            		c-2.861-1.788-6.151-2.811-9.659-2.811c-10.957,0-19.85,9.914-19.85,22.127v15.573C2.833,61.223,0,67.632,0,74.791h24.111
            		l-0.216-3.12l-3.029,0.022l-0.054-8.02l1.432-0.005c-0.53-0.862-0.834-1.866-0.843-2.942c-0.009-1.408,0.501-2.679,1.324-3.682
            		c-1.023-0.292-2.022-0.648-2.951-1.141c-0.005,0-0.005-0.005-0.012-0.005c-1.011-0.529-1.933-1.195-2.802-1.921
            		c-0.155-0.128-0.309-0.251-0.456-0.383c-0.854-0.775-1.651-1.615-2.327-2.551c-0.925-1.286-1.679-2.7-2.195-4.229
            		c-0.083,0.014-0.166,0.077-0.266,0.077c-1.58,0-2.866-1.72-2.866-3.846c0-1.542,0.698-2.819,1.68-3.408
            		c0.306,1.226,0.66,1.975,0.738,1.957c-0.262-0.441,2.987-7.386,14.617-5.193c3.345,0.633,5.48-1.399,6.625-4.123
            		c0.149,0.044,0.285,0.091,0.441,0.131c7.714,1.817,9.699,8.911,9.472,9.185c0.049,0.018,0.274-0.67,0.47-1.756l2.632,3.864
            		c-0.237,1.809-1.408,3.188-2.819,3.188c-0.091,0-0.171-0.063-0.27-0.077c-0.518,1.525-1.268,2.942-2.193,4.229
            		c-0.675,0.936-1.469,1.771-2.322,2.541c-0.149,0.138-0.308,0.27-0.459,0.402c-0.869,0.716-1.794,1.382-2.797,1.906
            		c-0.007,0.005-0.014,0.01-0.018,0.01c-0.953,0.506-1.981,0.876-3.039,1.172c0.794,0.977,1.287,2.199,1.293,3.555
            		c0.017,1.09-0.285,2.101-0.805,2.972l1.445-0.014l0.049,8.011l-3.029,0.025l-0.174,3.164h24.039c0-7.156-2.838-13.574-7.363-18.395
            		V45.007h10.835v14.01l14.01-14.01H84.37V9.58L36.874,9.582L36.874,9.582z M82.032,42.673H70.939L60.231,53.378V42.673H47.647
            		l-0.589-0.867v-0.985c0-7.186-3.086-13.555-7.849-17.596v-11.31h42.823V42.673z M22.371,41.202c0,1.063-0.86,1.918-1.923,1.918
            		c-1.055,0-1.917-0.855-1.917-1.918c0-1.068,0.862-1.921,1.917-1.921C21.506,39.279,22.371,40.134,22.371,41.202z M33.975,43.121
            		c-1.061,0-1.919-0.855-1.919-1.918c0-1.068,0.858-1.921,1.919-1.921c1.058,0,1.923,0.853,1.923,1.921
            		C35.902,42.265,35.033,43.121,33.975,43.121z M27.212,53.836c-2.172,0-4.02-0.839-4.804-2.029c1.133,0.762,2.847,1.245,4.804,1.245
            		c1.948,0,3.668-0.483,4.791-1.245C31.235,52.998,29.383,53.836,27.212,53.836z M28.768,67.856l0.817-0.014
            		c-0.014,0.249-0.062,0.493-0.154,0.707h-0.729C28.743,68.335,28.768,68.093,28.768,67.856z M27.411,66.287l-0.007-1.026
            		c0.082,0,0.16,0,0.238,0.014c0.201,0.315,0.36,0.652,0.475,0.995L27.411,66.287z M28.567,66.246
            		c-0.074-0.26-0.172-0.506-0.288-0.743c0.213,0.125,0.43,0.251,0.61,0.431c0.06,0.053,0.103,0.123,0.149,0.183
            		c0.044,0.048,0.098,0.105,0.133,0.153h-0.597C28.576,66.264,28.567,66.255,28.567,66.246z M27.421,66.711h0.808
            		c0.054,0.232,0.086,0.456,0.1,0.702l-0.908,0.01V66.711L27.421,66.711z M28.677,66.707h0.739c0.096,0.215,0.149,0.456,0.163,0.703
            		h-0.82C28.75,67.167,28.724,66.944,28.677,66.707z M27.43,69.01l0.729-0.009c-0.046,0.166-0.107,0.333-0.173,0.492
            		c-0.072,0.169-0.163,0.345-0.254,0.502c-0.096,0.014-0.194,0.019-0.287,0.032l-0.009-0.534L27.43,69.01z M28.612,69.001
            		l0.572-0.019c-0.075,0.119-0.161,0.237-0.276,0.35c-0.049,0.048-0.119,0.104-0.185,0.147c-0.112,0.092-0.239,0.174-0.366,0.251
            		c0.042-0.082,0.054-0.164,0.096-0.246C28.516,69.33,28.567,69.166,28.612,69.001z M27.43,67.856l0.914-0.004
            		c-0.015,0.241-0.047,0.483-0.082,0.697l-0.83,0.01L27.43,67.856L27.43,67.856z M25.783,66.296h-0.568
            		c0.038-0.055,0.089-0.114,0.136-0.16c0.185-0.241,0.423-0.434,0.688-0.584c-0.104,0.229-0.179,0.461-0.245,0.712
            		C25.783,66.269,25.788,66.278,25.783,66.296z M25.631,67.427l-0.813,0.019c0.016-0.237,0.068-0.479,0.154-0.712l0.724-0.004
            		C25.654,66.966,25.636,67.186,25.631,67.427z M26.005,69.503c0.041,0.104,0.072,0.2,0.124,0.282
            		c-0.159-0.077-0.297-0.164-0.426-0.282c-0.067-0.044-0.127-0.087-0.187-0.15c-0.109-0.105-0.209-0.21-0.292-0.338h0.597
            		C25.875,69.198,25.937,69.343,26.005,69.503z M26.976,67.423l-0.903,0.004c0-0.241,0.033-0.461,0.072-0.697h0.827L26.976,67.423z
            		 M21.562,70.981l2.287-0.014l6.755-0.048l2.275-0.027l-0.046-6.588l-1.226,0.012l-8.866,0.066h-1.214L21.562,70.981z
            		 M24.907,65.977c0.509-0.703,1.34-1.182,2.273-1.182c0.766-0.005,1.483,0.287,2.027,0.83c0.094,0.101,0.183,0.21,0.271,0.306
            		c0.364,0.497,0.575,1.076,0.575,1.701c0,0.689-0.248,1.323-0.694,1.857c-0.047,0.05-0.072,0.121-0.128,0.146
            		c-0.535,0.553-1.246,0.854-2.012,0.854c-0.756,0.005-1.469-0.283-2.011-0.821c-0.051-0.048-0.083-0.107-0.136-0.155
            		c-0.453-0.511-0.716-1.149-0.716-1.843C24.348,67.026,24.564,66.451,24.907,65.977z M25.723,68.568h-0.738
            		c-0.091-0.205-0.133-0.461-0.165-0.685l0.818-0.014C25.647,68.107,25.683,68.344,25.723,68.568z M26.991,69.015L27,69.494
            		l0.002,0.534c-0.082-0.005-0.166-0.005-0.245-0.019c-0.103-0.164-0.196-0.342-0.278-0.511c-0.079-0.155-0.138-0.324-0.192-0.483
            		H26.991L26.991,69.015z M26.976,67.866l0.015,0.697l-0.813,0.005c-0.049-0.224-0.08-0.461-0.1-0.702H26.976z M26.969,66.278
            		l-0.727,0.019c0.096-0.356,0.243-0.698,0.43-0.995c0.096-0.029,0.194-0.029,0.287-0.043L26.969,66.278z"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </Shake>
      </div>
    )
  }
}
