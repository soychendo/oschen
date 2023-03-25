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
        previous: {
          explorerId: state.selected,
          name: state.name,
          detail: state.detail,
        },
        selected: id,
        name: name,
        detail: cover,
      };
    case GO_BACK:
      if (state.previous) { 
        return {
          ...state,
          selected: state.previous.explorerId,
          name: state.previous.name,
          detail: state.previous.detail,
          previous: null, // Clean previous element
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