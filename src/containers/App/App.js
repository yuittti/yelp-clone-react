import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  

  // class getter
  get content() {
    return (
      <Router 
        history={this.props.history} 
        routes={this.props.routes}
      />
    )
  }
  
  render() {
    return (
     
        <div style={ { height: '100%' } }>
          {this.content}
        </div>
      
    )
  }
};

export default App;