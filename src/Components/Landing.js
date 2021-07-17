import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank, faDigitalOcean, faCodepen} from '@fortawesome/free-brands-svg-icons';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0 nameCustom">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber}
            <a href="mailto:name@email.com">{this.landingData.email}</a>{this.landingData.companyEmail}
          </div>
          <div>
            <p className="lead mb-5">{this.landingData.bio_1}<a href={this.landingData.companyUrl}>{this.landingData.companyName}</a>{this.landingData.bio_2}</p>
          </div>
          <div className="subheading mb-3">{this.landingData.bioHead}</div>
          <p className="lead mb-5">{this.landingData.bio2}</p>
          <div className="social-icons">
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.hackerRank}>
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
            <a href={this.landingData.sololearn}>
              <FontAwesomeIcon icon={faDigitalOcean} />
            </a>
            <a href={this.landingData.coderrank}>
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
