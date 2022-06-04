import {
  POST_ACCOUNT_INFO,
  GET_ID_DUP,
  POST_RESTAURANT_INFO,
  GET_RESTAURANT_INFO,
  PUT_RESTAURANT_INFO,
  POST_MENU_INFO,
  PUT_MENU_INFO,
  DEL_MENU_INFO,
  GET_TABLE_INFO,
  DEL_TABLE_INFO,
  PUT_TABLE_INFO,
  GET_RESERVATION_INFO,
  PUT_RESERVATION_INFO,
  DELETE_RESERVATION_INFO,
} from "@Common/API";
import axios from "axios";
import { POST_TABLE_INFO } from "../Common/API";

// login
export const postAccountInfo = async (params) => {
  return await axios.post(POST_ACCOUNT_INFO(), JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

// enroll
export const getIDValidation = async (params) => {
  return await axios.get(GET_ID_DUP(params));
};

export const postRestaurantInfo = async (params) => {
  return await axios.post(POST_RESTAURANT_INFO(), JSON.stringify(params), {
    headers: { "Content-Type": `application/json` },
  });
};

// admin - store
export const getRestaurantInfo = async (params) => {
  return await axios.get(GET_RESTAURANT_INFO(params));
};

export const putRestaurantInfo = async (params) => {
  return await axios.put(
    PUT_RESTAURANT_INFO(params),
    JSON.stringify(params.data),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
};

export const postMenuInfo = async (params) => {
  return await axios.post(POST_MENU_INFO(params), JSON.stringify(params.data), {
    headers: { "Content-Type": `application/json` },
  });
};

export const putMenuInfo = async (params) => {
  return await axios.put(PUT_MENU_INFO(params), JSON.stringify(params.data), {
    headers: { "Content-Type": `application/json` },
  });
};

export const deleteMenuInfo = async (params) => {
  return await axios.delete(DEL_MENU_INFO(params));
};

// admin - table
export const getTableInfo = async (params) => {
  return await axios.get(GET_TABLE_INFO(params));
};

export const postTableInfo = async (params) => {
  return await axios.post(
    POST_TABLE_INFO(params),
    JSON.stringify(params.data),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
};

export const deleteTableInfo = async (params) => {
  return await axios.delete(DEL_TABLE_INFO(params));
};

export const putTableInfo = async (params) => {
  return await axios.put(PUT_TABLE_INFO(params), JSON.stringify(params.data), {
    headers: { "Content-Type": `application/json` },
  });
};

// admin - reservation

export const getReservationInfo = async (params) => {
  return await axios.get(GET_RESERVATION_INFO(params));
};

export const putReservationInfo = async (params) => {
  return await axios.put(
    PUT_RESERVATION_INFO(params),
    JSON.stringify(params.data),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
};

export const deleteReservationInfo = async (params) => {
  return await axios.delete(DELETE_RESERVATION_INFO(params));
};
