import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { withAuth0 } from "@auth0/auth0-react";

class AuthenticationButton extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  }
}

export default withAuth0(AuthenticationButton);
