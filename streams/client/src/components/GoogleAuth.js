import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
