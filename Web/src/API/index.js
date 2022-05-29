import { POST_ACCOUNT_INFO, GET_ID_DUP } from "@Common/API";
import axios from "axios";

export const postAccountInfo = async (params) => {
  return await axios.post(POST_ACCOUNT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

export const getIDValidation = async (params) => {
  return await axios.get(`${GET_ID_DUP}?email=${params}`);
};
