import axios from "axios";

import { FETCH_PROFILE } from "./types";

export const fetchProfile = () => dispatch => {
  axios
    .get("/api/feed")
    .then(res =>
      dispatch({
        type: FETCH_PROFILE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
