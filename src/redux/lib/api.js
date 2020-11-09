import axios from "axios";
import { baseURL } from "../Config";

export function signup(name, email, password, password_confirmation) {
  return axios({
    method: "POST",
    url: baseURL + "signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      name,
      email,
      password,
      password_confirmation,
    },
  })
    .then(() => ({ error: false }))
    .catch((e) => ({
      error: true,
      errMsg: e.response.data,
    }));
}
