import React from 'react';
import PropTypes from 'prop-types';

const RemoveLastItem = props => {
  const removeItem = event => {
    props.handleRemovingLastItem();
  };
  
  return (<button onClick={removeItem} disabled={props.noItemsFound}>
    Delete Last Item
  </button>);
};

RemoveLastItem.propTypes = {
  noItemsFound: PropTypes.func.isRequired,
  handleRemovingLastItem: PropTypes.func.isRequired,
};

export default RemoveLastItem;
