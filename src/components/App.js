// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemsActions from '../actions/itemsActions';
import {browserHistory} from 'react-router';

class App extends React.Component {

  componentWillMount(){
    this.props.actions.loadItems();
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemsActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
