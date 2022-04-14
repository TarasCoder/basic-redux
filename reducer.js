export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: action.id, item: action.item }];
    case "REMOVE_ITEM":
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
}
