import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import PostsViewContainer from './components/posts/PostsViewContainer';
import FormView from './components/form/FormView';
import TreeSearchView from './components/tree/TreeSearchView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <Link to="/posts">
                <h1 className="App-title">
                  Posts
                </h1>
              </Link>
              <Link to="/form">
                <h1 className="App-title">
                  Form
                </h1>
              </Link>
              <Link to="/tree">
                <h1 className="App-title">
                  Node Tree
                </h1>
              </Link>
            </header>
            <p className="App-intro">
              <Route exact path="/" component={PostsViewContainer}/>
              <Route path="/posts" component={PostsViewContainer}/>
              <Route path="/form" component={FormView}/>
              <Route path="/tree" component={TreeSearchView}/>
            </p>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
