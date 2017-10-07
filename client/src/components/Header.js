import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return (
        	<a href="http://localhost:3001/auth/google">Sign in</a>
        )
      default:
        return 'im logged in';
    }
  }


  render() {
    return (
      <div>
        <h2>Header</h2>
        <div>
        	{this.renderContent()}
        </div>
      </div>
    );
  }

}

function mapStateToProps({ auth }) {
	return { auth };
 }

export default connect(mapStateToProps)(Header);