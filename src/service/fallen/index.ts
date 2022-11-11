import api from "../api";

export const getFallen = async () => {
  try {
    const response = await api.get("fallen");

    return response.data;
  } catch (error) {
    console.error("Error teste:", error);
    return null;
  }
};
