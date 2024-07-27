import {
  ApiResponse,
  UserActivity,
  UserMainData,
} from "./types";

class ApiClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL;
  }

  public async getUserAsync(id: number): Promise<ApiResponse<UserMainData>> {
    return await this.sendGetAsync(`user/${id}`);
  }

  public async getUserActivityAsync(
    id: number
  ): Promise<ApiResponse<UserActivity>> {
    return await this.sendGetAsync(`user/${id}/activity`);
  }

  private async sendGetAsync<T>(route: string) {
    const response = await fetch(`${this.baseUrl}/${route}`, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Failed request with status: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

export default new ApiClient();
