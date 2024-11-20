import api from "./api";

export const getCompanies = async () => {
  try {
    const response = await api.get("/company");
    return response.data;
  } catch (error) {
    console.error("Error al obtener companies ", error);
  }
};

export const getCompanyById = async (companyId) => {
  try {
    const response = await api.get(`/company/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener company ", error);
  }
};
