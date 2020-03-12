import React from 'react';
import { addFeature } from '../actions/index';
import { connect } from 'react-redux';

export default connect(
  null,
  { addFeature }
)(({ addFeature, feature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(feature)}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
});
