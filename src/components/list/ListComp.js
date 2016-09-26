import React, {PropTypes} from 'react';
import ListCompRow from './ListCompRow';

const ListComp = ({items}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      {items.map((oneItem,index) =>
        <ListCompRow key={index} number={++index} item={oneItem}/>
      )}
      </tbody>
    </table>
  );
};

ListComp.propTypes = {
    items: PropTypes.array.isRequired
};

export default ListComp;
