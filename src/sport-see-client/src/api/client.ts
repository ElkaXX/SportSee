import {
  ApiResponse,
  UserActivity,
  UserAverage,
  UserMainData,
  UserPerformance,
} from "./types";

class ApiClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL;
  }

  // Méthode pour obtenir des informations de base sur l'utilisateur
  public async getUserAsync(id: number): Promise<ApiResponse<UserMainData>> {
    return await this.sendGetAsync(`user/${id}`);
  }

  // Méthode d'obtention des données d'activité des utilisateurs
  public async getUserActivityAsync(
    id: number
  ): Promise<ApiResponse<UserActivity>> {
    return await this.sendGetAsync(`user/${id}/activity`);
  }

  // Méthode pour obtenir la durée moyenne des sessions
  public async getUserAverageAsync(
    id: number
  ): Promise<ApiResponse<UserAverage>> {
    return await this.sendGetAsync(`user/${id}/average-sessions`);
  }

  // Méthode pour obtenir des mesures de performances
  public async getUserPerformance(
    id: number
  ): Promise<ApiResponse<UserPerformance>> {
    return await this.sendGetAsync(`user/${id}/performance`);
  }

  // Méthode générale d'envoi des requêtes GET
  private async sendGetAsync<T>(route: string) {
    const response = await fetch(`${this.baseUrl}/${route}`, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Failed request with status: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

export default new ApiClient();
