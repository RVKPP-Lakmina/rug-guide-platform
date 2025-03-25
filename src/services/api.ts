import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const uploadVedio = async (file: File) => {
  const formData = new FormData();
  formData.append("video", file);
  try {
    const response = await api.post("/upload", formData);
    return response.data;
  } catch {
    console.log("Error uploading file");
  }
};
