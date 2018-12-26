import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const ShoppingList = props => {
  return (<div>
    <p className="items">Items</p>
    <ol className="item-list">
          {props.items.map((item, index) => <ListItem key={index} item={item}/>)}
    </ol>
  </div>);
}

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ShoppingList;
