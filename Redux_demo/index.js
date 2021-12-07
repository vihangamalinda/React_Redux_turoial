const redux = require("redux");
const createStore = redux.createStore;

// string of the action type
const BUY_CAKE = "BUY_CAKE";

// Action Creator is a function
const buyCake = () => {
  //Action
  return {
    type: BUY_CAKE,
    info: "This is the First redux action",
  };
};

// Reducer
// (previousState,action) => newState

//Initial State Object for the reducer
const initialState = {
  numOfCakes: 15
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Store
// store holds the application state
const store = createStore(reducer);

console.log("Initial State: ", store.getState());

// use subscribe to listen
const unsubcribe = store.subscribe(() => console.log("Updated State: ", store.getState()));

// Allowing state to be updated by using dispatch(Parameter Action or Action creator )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubcribe()
