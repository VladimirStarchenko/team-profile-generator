const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee("Vlad", "123", "vladimistar@gmail.com");

  expect(employee.name).toBe("Vlad");
  expect(employee.id).toEqual("123");
  expect(employee.email).toEqual("vladimistar@gmail.com");
});
