import React from 'react';

const AddedFeature = props => {
  console.log(props, "AddedFeature")
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
