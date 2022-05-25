import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:3001";

const instance = axios.create({
  baseURL,
});
export let page = 1;
let limit = 5;
export const getTableData = async (_page, _limit) => {
  const { data } = await instance.get(
    `/api/applications?_page=${_page}&_limit=${_limit}`
  );

  //   limit += 5;
  return data;
};
export const getTableRows = async (_page, _limit) => {
  const { data } = await instance.get(`/api/applications`);

  //   limit += 5;
  return data;
};
export const getApplicationInfo = async (id) => {
  const { data } = await instance.get(`/api/applications?id=${id}`);

  //   limit += 5;
  return data;
};
