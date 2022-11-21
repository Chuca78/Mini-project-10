const Employee = require("../lib/Employee");

test("Verifies that new Employee instance is an object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Verifies that name is set via constructor argument", () => {
  const name = "Edward";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Verifies that id is set via constructor argument", () => {
  const testValue = 12345;
  const e = new Employee("Edward", testValue);
  expect(e.id).toBe(testValue);
});

test("Verifies that email is set via constructor argument", () => {
  const testValue = "employee@email.com";
  const e = new Employee("Edward", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Verifies getName() returns name", () => {
  const testValue = "Edward";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Verifies getId() returns id", () => {
  const testValue = 100;
  const e = new Employee("Edward", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Verifies getEmail() returns email", () => {
  const testValue = "test@email.com";
  const e = new Employee("Edward", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Verifies getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Edward", 1, "test@email.com");
  expect(e.getRole()).toBe(testValue);
});
