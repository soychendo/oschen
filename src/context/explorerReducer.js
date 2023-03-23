import { 
  SELECTED,
  SELECT
} from "@context/types";

const explorerReducer = (state, action) => {

  const { type, payload } = action;

  switch(type) {

    case SELECT: 
      return {
        ...state,
        selected: payload.id,
        name: payload.name,
        detail: payload.cover
      };
    case SELECTED: 
      return {
        ...state,
        selectedContent: payload
      };
    default:
      return state;
  };
};

export {explorerReducer};