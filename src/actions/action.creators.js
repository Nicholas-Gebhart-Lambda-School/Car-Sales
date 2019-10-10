import { ADD_FEATURE } from './action.types';

export const addFeature = feature => {
  console.log(`adding feature ${feature.name}`);
  return { type: ADD_FEATURE, payload: feature };
};
