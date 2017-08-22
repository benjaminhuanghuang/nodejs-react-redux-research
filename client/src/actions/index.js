import axios from "axios";
//
import { FETCH_USER, ADD } from "./types";

// Error: Actions must be plain objects. Use custom middleware for async actions.
// App boots up -> fetch user -> header update
// export const fetchUser = () => async dispatch => {
//   const res = await axios.get("/api/user");
//   console.log("fetchUser", res.data);
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

export const fetchUser = () => {
  // axios.get("/api/user").then(res => {
  //   dispatch({ type: FETCH_USER, payload: res.data });
  // });
  let data = {
    name:'A'
  }
  return { type: FETCH_USER, payload: data };
};

// App boots up -> fetch user -> header update
export const Add = data => async dispatch => {
  dispatch({ type: ADD, payload: data + 1 });
};
