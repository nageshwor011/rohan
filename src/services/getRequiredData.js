import http from "./utils/http";

async function getRequiredDataApi() {
  try {
    const response = await http.get("/api/required-data");
    return response.data;
  } catch {
    return null;
  }
}

export default getRequiredDataApi;
