import axiosClient from "./axiosClient";
const BASE_URL = "https://api.example.com";

//Khai báo các api xử lý ở đây
//GET
export const getListKiemDich = async (params: any) => {
  const url = BASE_URL;
  return axiosClient.get(url, { params });
};
//POST
export const postAddKiemDich = async (body: any) => {
  const url = BASE_URL;
  return axiosClient.post(url, body);
};
//PUT
export const putUpdateKiemDich = async (body: any) => {
  const url = BASE_URL;
  return axiosClient.put(url, body);
};
//DELETE
export const deleteKiemDich = async (id: any) => {
  const url = `${BASE_URL}/${id}`;
  return axiosClient.delete(url);
};
