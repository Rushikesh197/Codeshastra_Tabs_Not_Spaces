// store.js

import { createStore, combineReducers } from 'redux';
import portfolioReducer from '../../pages/Portfolio/components/actions/reducer';
// Import other reducers as needed

// Combine reducers
const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  // Add other reducers here
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
