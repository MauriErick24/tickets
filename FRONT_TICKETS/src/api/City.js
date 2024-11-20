import api from "./api";

export const getAllCities = async () => {
  try {
    const response = await api.get("/city");
    return response.data;
  } catch (error) {
    console.error("Error al obtener ciudades", error);
  }
};
