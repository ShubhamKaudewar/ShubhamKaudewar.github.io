import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank, faFacebook, faInstagram ,faDigitalOcean} from '@fortawesome/free-brands-svg-icons';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.hackerRank}>
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
            <a href={this.landingData.sololearn}>
              <FontAwesomeIcon icon={faDigitalOcean} />
            </a>
            <a href={this.landingData.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={this.landingData.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
