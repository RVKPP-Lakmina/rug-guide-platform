import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const uploadVedio = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await api.post("/predict", formData);
    return response.data;
  } catch {
    console.log("Error uploading file");
  }
};
