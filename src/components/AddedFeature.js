import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions';

export default connect(
  null,
  { removeFeature }
)(({ removeFeature, feature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
});
