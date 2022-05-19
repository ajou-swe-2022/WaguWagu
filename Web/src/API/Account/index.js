import { POST_ACCOUNT_INFO } from "@Common/API";
import axios from "axios";

export const postAccountInfo = async (params) => {
  return await axios.post(POST_ACCOUNT_INFO, JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};
