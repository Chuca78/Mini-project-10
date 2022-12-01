
// tests the engineer.js file
const Engineer = require("../lib/Engineer");

test("Verifies that GitHub is set via constructor argument", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "test@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Verifies getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "test@email.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Verifies getGithub() returns GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "test@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
