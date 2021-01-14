import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">This portfolio built on <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} color="white"/></a>
            </div>
        </footer>
    );
}
}

export default Footer;