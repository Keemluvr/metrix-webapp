import LoginPage from "../page_objects/LoginPage";

const loginPage = new LoginPage();
const environment = loginPage.envToRun;

describe(`[${environment}] Login page test`, () => {
  beforeEach(() => {
    cy.visitURL(environment, "/");
    cy.get(loginPage.getTitle, { timeout: 30000 }).should("have.text", "Welcome back!");
  });

  it("Successful login", () => {
    cy.get(loginPage.getEmailInput).should("be.visible");
    cy.get(loginPage.getEmailInput).click();
    cy.get(loginPage.getEmailInput).type(Cypress.env("email"));
    cy.get(loginPage.getEmailInput).should("have.value", Cypress.env("email"));

    cy.get(loginPage.getPasswordInput).should("be.visible");
    cy.get(loginPage.getPasswordInput).click();
    cy.get(loginPage.getPasswordInput).type(Cypress.env("password"));
    cy.get(loginPage.getPasswordInput).should("have.value", Cypress.env("password"));

    cy.get(loginPage.getSubmitButton).should("be.visible");
    cy.get(loginPage.getSubmitButton).click();

    cy.intercept({ method: "GET", url: "/api/auth/session" }, []).as("getSession");
    cy.wait("@getSession", { timeout: 20000 });
    // cy.getCookie("next-auth.session-token").should("exist");
  });

  it("Unsuccessful login with wrong credentials", () => {
    cy.get(loginPage.getEmailInput).should("be.visible");
    cy.get(loginPage.getEmailInput).click();
    cy.get(loginPage.getEmailInput).type("test@example.com");
    cy.get(loginPage.getEmailInput).should("have.value", "test@example.com");

    cy.get(loginPage.getPasswordInput).should("be.visible");
    cy.get(loginPage.getPasswordInput).click();
    cy.get(loginPage.getPasswordInput).type("test@example.com");
    cy.get(loginPage.getPasswordInput).should("have.value", "test@example.com");

    cy.get(loginPage.getSubmitButton).should("be.visible");
    cy.get(loginPage.getSubmitButton).click();

    cy.get(loginPage.getEmailInput).should("have.attr", "aria-invalid", "true");
    cy.get(loginPage.getPasswordInput).should("have.attr", "aria-invalid", "true");

    cy.checkToastMessage("Invalid credentials, please try again");
  });

  it("Validate empty fields", () => {
    cy.get(loginPage.getSubmitButton).should("be.visible");
    cy.get(loginPage.getSubmitButton).click();

    cy.get(loginPage.getEmailInput).should("have.attr", "aria-invalid", "true");
    cy.get(loginPage.getPasswordInput).should("have.attr", "aria-invalid", "true");

    cy.get(loginPage.getErrorMessage).then((errors) => {
      const [emailError, passwordError] = errors.toArray().map((el) => el.innerText);
      expect(emailError).to.equal("Email is required");
      expect(passwordError).to.equal("Password is required");
    });
  });

  it("Should have a valid link to sign up", () => {
    cy.get(loginPage.getSignUpButton).should("be.visible");
    cy.get(loginPage.getSignUpButton).click();
    cy.url().should("include", "/sign-up");
  });
});
