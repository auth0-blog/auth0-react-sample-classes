import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>
          You use will use an ID Token to get the profile information of a
          logged-in user.
          <br />
          <strong>This route should be protected</strong>.
        </p>
      </div>
    );
  }
}

export default Profile;
