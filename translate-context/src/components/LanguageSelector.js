import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          data-testid="us"
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          data-testid="nl"
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}
