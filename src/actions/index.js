import {SEARCH_TYPE} from "../types";

export const search_Text = (text, confirm, searchResult) => {
  const action = {
    type: SEARCH_TYPE,
    text,
    confirm,
    searchResult,
  };
  console.log("search_Text", action);
  return action;
};
