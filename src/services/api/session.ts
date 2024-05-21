import { Auth } from "@/types/User";

export default class Session {
  private static BASE_API = process.env.INITIAL_PATH_URL_API;

  static signIn(credentials: Auth.SignIn) {
    return fetch(`${this.BASE_API}/signin`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" }
    });
  }

  static signUp(credentials: Auth.SignUp) {
    return fetch(`${this.BASE_API}/signup`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" }
    });
  }

  static signOut(accessToken: string) {
    return fetch(`${this.BASE_API}/auth/logout?token=${accessToken}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
  }
}
