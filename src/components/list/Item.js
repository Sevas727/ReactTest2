import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class Item extends React.Component {

  getValidDate(date){
    let dt = new Date(date);
    return dt.toLocaleString("ru", {month: 'long'});
}

  render() {

    const {item} = this.props;

    return (
      <div className="container">
         <div id="container">
          <img src={`http://api.itboost.org:88/${item.avatar.path}`} />
          <h1>{item.name}</h1>
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>

          <p>Начало события: месяц {this.getValidDate(item.event_start_date)},число {new Date(item.event_start_date).getDate()} </p>
          <p>Конец события:  месяц {this.getValidDate(item.event_end_date)},число {new Date(item.event_end_date).getDate()} </p>
          <p>Автор: {item.created_by.firstname} {item.created_by.lastname}, <span>почта: {item.created_by.email}</span></p>
        </div>
      </div>
    );
  }
}


Item.propTypes = {
  item: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    item: state.items[ownProps.params.id - 1]
  };
}


export default connect(mapStateToProps)(Item);


