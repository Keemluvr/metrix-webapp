import { User as UserType } from "@/types/User";

export default class User {
  private static BASE_API = process.env.INITIAL_PATH_URL_API;

  static View = async (token: string, id: number) => {
    return fetch(`${this.BASE_API}/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };

  static List = async (token: string) => {
    return fetch(`${this.BASE_API}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };

  static Create(token: string, data: UserType.Create) {
    return fetch(`${this.BASE_API}/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  static Update = async (token: string, id: number, data: UserType.Edit) => {
    return fetch(`${this.BASE_API}/user/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  static Delete = async (token: string, id: number) => {
    return fetch(`${this.BASE_API}/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };
}
