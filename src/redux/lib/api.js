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
    .then((response) => {
      return { error: false, body: response.data.result };
    })
    .catch((e) => ({
      error: true,
      errMsg: e.response.data,
    }));
}

export function login(email, password) {
  return axios({
    method: "POST",
    url: baseURL + "signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      console.log("lib/api.js: ", response);
      return { error: false, body: response.data.message };
    })
    .catch((e) => {
      return { error: true, errMsg: e.response.data };
    });
}
