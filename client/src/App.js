import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-21&sortBy=publishedAt&apiKey=e7ef34b0abd34292be436ff15b021fb9")
          .then(res => res.text())
          .then(res => this.setState({
                apiResponse: res
            }))
          .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        const data = this.state.apiResponse
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">News API</h1>
                </header>
                <div>
                    {data.forEach(item => 
                        <div>
                          <h1>{item.title}</h1>   
                          <h2>{item.publishedAt}</h2>
                          <img src={item.urlToImage} alt=""/>
                          <p>item.description</p>
                        </div>
                      )
                    }
                </div>
            </div>
        );
    }
}

export default App;
