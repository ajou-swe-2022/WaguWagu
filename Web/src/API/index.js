import {
  POST_ACCOUNT_INFO,
  GET_ID_DUP,
  POST_RESTAURANT_INFO,
} from "@Common/API";
import axios from "axios";

export const postAccountInfo = async (params) => {
  return await axios.post(POST_ACCOUNT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

export const getIDValidation = async (params) => {
  return await axios.get(`${GET_ID_DUP}?email=${params}`);
};

export const postRestaurantInfo = async (params) => {
  return await axios.post(POST_RESTAURANT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};
