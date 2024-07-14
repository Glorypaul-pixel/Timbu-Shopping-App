import axios from "axios";
const APP_ID = "8DNVHF3POEGBGC3";
const API_KEY = "2f4b85fa618541a2bf991d6e0214be6420240713100209783145";
const ORGANIZATION_ID = "a73a3d37b31f4079871286de34229cc5";
const apiUrl = `https://timbu-get-all-products.reavdev.workers.dev`;

export const fetchProducts = async () => {
  await axios
    .get(apiUrl, {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: false,
        page: 1,
        size: 10,
        Appid: APP_ID,
        Apikey: API_KEY,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
