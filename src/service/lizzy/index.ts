import api from "../api";

export const getLizzy = async () => {
  try {
    const response = await api.get("lizzy");

    return response.data;
  } catch (error) {
    console.error("Error teste:", error);
    return null;
  }
};
