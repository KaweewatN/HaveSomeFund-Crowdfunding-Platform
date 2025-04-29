import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  // Generic GET request
  public async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const response = await this.apiClient.get<T>(url, { params });
    return response.data;
  }

  // Generic POST request
  public async post<T>(url: string, data?: Record<string, any>): Promise<T> {
    const response = await this.apiClient.post<T>(url, data);
    return response.data;
  }

  // Generic PUT request
  public async put<T>(url: string, data?: Record<string, any>): Promise<T> {
    const response = await this.apiClient.put<T>(url, data);
    return response.data;
  }

  // Generic DELETE request
  public async delete<T>(url: string): Promise<T> {
    const response = await this.apiClient.delete<T>(url);
    return response.data;
  }
}

const apiService = new ApiService(
  process.env.API_BASE_URL || "http://localhost:3000/api"
);
export default apiService;
