import React from "react";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends React.Component {
  //other logic
  render() {
    return (
      <div className="row">
        <div className="col s1 offset-s5" style={{ marginTop: "17%" }}>
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      </div>
    );
  }
}
