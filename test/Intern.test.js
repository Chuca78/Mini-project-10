const Intern = require("../lib/Intern");

test("Verifies that school is set via constructor argument", () => {
  const testValue = "UT Austin";
  const e = new Intern("Danielle", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Verifies getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Danielle", 1, "test@email.com", "UT Austin");
  expect(e.getRole()).toBe(testValue);
});

test("Verifies getSchool() returns school", () => {
  const testValue = "UT Austin";
  const e = new Intern("Danielle", 1, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
