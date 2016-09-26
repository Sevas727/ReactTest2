import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ListCompRow = ({number, item}) => {
  return (

    <tr>
      <td>{number}</td>

      <td><Link to={'/event/' + item.id}>{item.name}</Link></td>
    </tr>

  );
};

ListCompRow.propTypes = {
    item: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired
};

export default ListCompRow;
