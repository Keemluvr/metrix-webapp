import Utilities from "./Utilities";

class LoginPage extends Utilities {
  get getTitle() {
    return '[data-testid="title"]';
  }

  get getEmailInput() {
    return '[name="email"]';
  }

  get getPasswordInput() {
    return '[name="password"]';
  }

  get getSubmitButton() {
    return '[type="submit"]';
  }

  get getSignUpButton() {
    return '[data-testid="sign-up-button"]';
  }

  get getErrorMessage() {
    return '[data-slot="error-message"]';
  }
}

export default LoginPage;
