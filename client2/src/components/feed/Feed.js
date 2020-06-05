import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../../actions/fetchProfile";
import ProfileCard from ".././layout/ProfileCard";
import LoaderSpinner from ".././layout/LoaderSpinner";
class Feed extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.props.fetchProfile();
    setTimeout(() => {
      this.setState({ data: this.props.fetchProfileData });
    }, 2000);
  }

  renderData() {
    return this.state.data.map(user => {
      console.log(user.image.slice(14));
      return <ProfileCard key={user._id} user={user} />;
    });
  }

  render() {
    return (
      <div>
        {this.state.data.length > 0 ? this.renderData() : <LoaderSpinner />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchProfileData: state.fetchProfileData
});
export default connect(
  mapStateToProps,
  { fetchProfile }
)(Feed);
