import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://cdn.contentful.com/spaces/2j26mmdwgh47/environments/master/",
  params: {
    access_token: "6kWkzM2i5aikM0cYNfI1XtDRoZLixT0a3O9_4JKtKZs",
  },
});

export default axiosInstance;
