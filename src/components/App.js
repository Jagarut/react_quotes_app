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

  renderCardQuote() {
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

                    <div className="ui row">
                      <a
                        id="tweet-quote"
                        className=" ui mini twitter button"
                        target="_blank"
                        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22How%20wonderful%20it%20is%20that%20nobody%20need%20wait%20a%20single%20moment%20before%20starting%20to%20improve%20the%20world.%22%20Anne%20Frank"
                      >
                        <i className=" twitter icon"></i>
                      </a>
                      <div
                        onClick={this.handleClick}
                        className="ui mini button right floated secondary  six wide column"
                        id="new quote"
                      >
                        New Quote
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const card = this.renderCardQuote();
    return card;
  }
}
export default App;
