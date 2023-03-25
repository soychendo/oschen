import { 
  SELECTED,
  SELECT,
  GO_BACK
} from "@context/types";

const explorerReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case SELECT:
      const { id, name, cover } = payload;
      return {
        ...state,
        stack: [...state.stack, { id, name, cover }],
        selected: id,
        name: name,
        detail: cover,
        selectionHistory: [...state.selectionHistory, id], // Add the current selection to the stack
        previous: {
          explorerId: state.selected,
          name: state.name,
          detail: state.detail,
        },
      };
    case GO_BACK:
      if (state.stack.length > 1) {
        const previousSelection = state.selectionHistory[state.selectionHistory.length - 2]; // Gets the previous selection
        const newSelectionHistory = state.selectionHistory.slice(0, -1); // Remove the current selection from the stack
  
        return {
          ...state,
          selected: previousSelection,
          name: state.stack[state.stack.length - 2].name,
          detail: state.stack[state.stack.length - 2].cover,
          previous: null,
          selectionHistory: newSelectionHistory, // Refreshes the stack of previous selections
          stack: state.stack.slice(0, -1),
        };
      }
      return state;
    case SELECTED: 
      return {
        ...state,
        selectedContent: payload,
      };
    default:
      return state;
  };
};

export {explorerReducer};