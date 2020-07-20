import React, { Component } from "react";

import "./AppStyle.css";

class App extends Component {
  state = {
    quotes: [],
    selectedQuote: "",
  };

  handleClick = () => {
    //console.log("button clicked");
  };

  quoteSelector = () => {
    if (this.state.quotes[0]) {
      let index = Math.floor(Math.random() * this.state.quotes.length) + 1;
      console.log(index);
    }
  };

  componentDidMount = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => this.setState({ quotes: data }));
  };

  render() {
    return (
      <div className="wrapper">
        <div className="ui container quote">
          <div className="ui card">
            <div className="content">
              <h2 id="text" className="center aligned header">
                This is the quote
              </h2>
              <p id="author" className="right aligned author">
                author
              </p>
              <button
                onClick={this.handleClick}
                className="ui button right floated"
                id="new quote"
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
