import React, { Component } from "react";
import fetchQuotes from "../apis/quotesApi";
import { Index } from "../logic/Index";

import "./AppStyle.css";

class App extends Component {
  state = {
    quotes: [],
    selectedQuoteText: "",
    selectedQuoteAuthor: "",
  };

  handleClick = () => {
    this.quoteSelector();
  };

  componentDidMount = () => {
    document.body.style.backgroundColor = "paleturquoise";
    const index = Index(9);
    fetchQuotes.get("/quotes").then((response) =>
      this.setState({
        quotes: response.data,
        selectedQuoteText: response.data[index].text,
        selectedQuoteAuthor: response.data[index].author,
      })
    );
  };

  quoteSelector = () => {
    if (this.state.quotes[0]) {
      const index = Index(this.state.quotes.length);
      const { text, author } = this.state.quotes[index];
      this.setState({ selectedQuoteText: text, selectedQuoteAuthor: author });
    }
  };

  render() {
    return (
      <div id="wrapper">
        <div className="inner" id="quote-box">
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column centered ">
                <div className="ui card">
                  <div className="content">
                    <h2 id="text" className="center aligned header">
                      {this.state.selectedQuoteText}
                    </h2>
                    <p id="author" className="right aligned author">
                      {this.state.selectedQuoteAuthor}
                    </p>
                    <button
                      onClick={this.handleClick}
                      className="ui button right floated secondary"
                      id="new quote"
                    >
                      New Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
