import http from "./utils/http";

async function predictSalesApi(salesData) {
  const response = await http.post("api/predict-sales", salesData);
  return response.data;
}

export default predictSalesApi;
