import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from "./actions";
  import {useReducer} from 'react';
  
  export const reducer = (state, action) => {
    switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products]
        };
      // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories]
        };
      // if action type value is the value of "UPDATE_CURRENT_CATEGORIES", return a new state of object with an update to current cateogries and products
        case UPDATE_CURRENT_CATEGORY:
        return {
            ...state,
            currentCategory: action.currentCategory
        }
  
      default:
        return state;
    }
  };
  // export, help initialize global state object and then provide with the functionality for updating that state by automatically running it through custom reducer() function
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }