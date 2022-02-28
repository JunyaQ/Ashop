import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
  } from './actions';
  import {useReducer} from 'react';
  
  export const reducer = (state, action) => {
    switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
      case UPDATE_PRODUCTS:
        return {
          ...state,// preserve everything else on state
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

        case ADD_TO_CART:
        return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product]
        };

        case ADD_MULTIPLE_TO_CART:
        return {
        ...state,
        cart: [...state.cart, ...action.products],
        };
        
        case REMOVE_FROM_CART:
        let newState = state.cart.filter(product => {
        return product._id !== action._id;
        });

        return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
         };

        case UPDATE_CART_QUANTITY:
            return {
              ...state,
              cartOpen: true,
              cart: state.cart.map(product => {
                if (action._id === product._id) {
                  product.purchaseQuantity = action.purchaseQuantity;
                }
                return product;
              })
            };
         case CLEAR_CART:
            return {
              ...state,
              cartOpen: false,
              cart: []
            };

            case TOGGLE_CART:
              return {
                ...state,
                cartOpen: !state.cartOpen
              };
  
      default:
        return state;
    }
  };


  // export, help initialize global state object and then provide with the functionality for updating that state by automatically running it through custom reducer() function
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }