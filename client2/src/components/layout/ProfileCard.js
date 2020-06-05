import React from "react";
import { Link } from "react-router-dom";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="card container  col s6 offset-s3">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              alt="profiles of users"
              className=" responsive-img"
              src={this.props.user.image.slice(14)}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.user.name}
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <Link to="/feed" className="left">
                Like(2){" "}
              </Link>
              <Link to="/feed" className="right">
                SuperLike(4)
              </Link>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {this.props.user.name}
              <i className="material-icons right">close</i>
            </span>
            <p>
              Email - {this.props.user.email} Connect with me,I am a Nice Guy
            </p>
            <p>Block this user - </p>
            <button className="btn btn-sm teal">Block</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileCard;
