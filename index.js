import store from "./store.js";
import { addItem } from "./actions.js";

store.subscribe(() => {
  console.log("...Store updated!!!", store.getState());
});

store.dispatch(addItem("ADD_ITEM", 1, "Bobic"));
store.dispatch(addItem("ADD_ITEM", 2, "Sonic"));
store.dispatch(addItem("REMOVE_ITEM", 2));

console.log("New state is: ", store.getState());
