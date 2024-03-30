// reducers.js

const initialState = {
    balance: 0, // Initial balance
  };
  
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_BALANCE':
        return {
          ...state,
          balance: action.payload, // Update balance with the new value
        };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;
