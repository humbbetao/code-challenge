import React, {Component} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import avatar from '../../../files/avatar-dev.png'

class Header extends Component {

  render() {
    console.log(this.props);
    const {profile} = this.props;
    return (
      <div className="header">
        <img src={avatar} alt="avatar" title="avatar"/>
        <p>{(profile.name || "").toUpperCase()}</p>
        <span>{(profile.profession || "").toUpperCase()}</span>
      </div>
    )
  }
}

Header.defaultProps = {
  profile: {}
};
Header.propsTypes = {
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile,
  image: state.image.image
});
export default connect(mapStateToProps)(Header)



