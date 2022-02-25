import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    // state: most up to date version of our global state object
    // dispatch is the moethod we execute to update our state. it is peciifically going to look for an action obhect passed in as its argument
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };
  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  export { StoreProvider, useStoreContext };