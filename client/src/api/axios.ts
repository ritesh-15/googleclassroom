import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

// Axios interceptor

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;

      try {
        await axios.get("http://localhost:9000/api/v/refresh", {
          withCredentials: true,
        });

        return api.request(originalRequest);
      } catch (err) {}
    }
    throw error;
  }
);

export default api;
