const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Verifies that office number is set via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Boss", 1, "test@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('Verifies getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Boss", 1, "test@email.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Verifies getOffice() returns office number", () => {
  const testValue = 100;
  const e = new Manager("Boss", 1, "test@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
