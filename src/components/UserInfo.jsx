import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <p>
          Name : {this.props.name}, Email : {this.props.email}, Website :{" "}
          {this.props.website}
        </p>
      </div>
    );
  }
}

export default UserInfo;
