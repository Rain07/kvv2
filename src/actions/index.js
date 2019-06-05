import KARNAVAL from "karnaval";

const API_KEY = "";
const ROOT_URL = ``;

export const FETCH_DATA = "FETCH_DATA";

export function fetchdATA(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = KARNAVAL.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  };
}
