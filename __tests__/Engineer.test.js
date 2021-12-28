const Manager = require("../lib/Manager");

test("creates a new employee object", () => {
  const manager = new Manager(
    "Vlad",
    "123",
    "vladimistar@gmail.com",
    "VladimirStarchenko"
  );

  expect(manager.name).toBe("Vlad");
  expect(manager.id).toEqual("123");
  expect(manager.email).toEqual("vladimistar@gmail.com");
  expect(manager.officeNumber).toEqual("VladimirStarchenko");
});
