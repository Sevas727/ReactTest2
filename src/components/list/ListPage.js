import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemsActions from '../../actions/itemsActions';
import ListComp from './ListComp';
import {browserHistory} from 'react-router';

class ListPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

    redirectToAddItemPage() {
        browserHistory.push('/addItem');
    }

  render() {
    const {items} = this.props;

    return (
      <div>
        <h1>Events</h1>
        <ListComp items={items}/>
      </div>
    );
  }
}

ListPage.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      items: state.items
  };
}

export default connect(mapStateToProps)(ListPage);
