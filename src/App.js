import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">TopicS</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
const Home = () => (
  <div><h2>Home</h2></div>
);
const About = () => (
  <div><h2>About</h2></div>
);
const Topics = ({ match }) => (
  <div>
    <h2>TopicS{console.log(match)}</h2>
    <ul>
      <li><Link to={`${match.url}/action`}>Action</Link></li>
      <li><Link to={`${match.url}/dispatcher`}>Dispatcher</Link></li>
      <li><Link to={`${match.url}/reducer`}>Reducer</Link></li>
      <li><Link to={`${match.url}/store`}>Store</Link></li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={`${match.url}`} render={() => <h3>React Redux</h3>} />
  </div>
);
const Topic = ({ match }) => (
  <div><h3>{match.params.topicId}</h3></div>
);

export default App;
