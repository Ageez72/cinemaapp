import {SEARCH_TYPE} from "../types";

const reducer = (state = {}, action) => {
  let searchObj = {};
  if (action.type === SEARCH_TYPE) {
    searchObj = {
      searchText: action.text,
      confirm: action.confirm,
      searchResult: action.searchResult,
    };
    console.log(searchObj);
    return searchObj;
  } else {
    return state;
  }
};

export default reducer;
