import { ADD_FEATURE, REMOVE_FEATURE } from './action.types';

export const addFeature = feature => {
  console.log('add', feature.id);
  return { type: ADD_FEATURE, payload: feature };
};

export const removeFeature = feature => {
  console.log('remove', feature.id);
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};
