class Utilities {
  get envToRun() {
    return Cypress.env("ENV") ? "DEVELOPMENT" : "LOCAL";
  }
}

export default Utilities;
