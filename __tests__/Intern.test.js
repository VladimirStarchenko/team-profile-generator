const Intern = require("../lib/Intern");

test("creates a new employee object", () => {
  const intern = new Intern("Vlad", "123", "vladimistar@gmail.com", "UofT");

  expect(intern.name).toBe("Vlad");
  expect(intern.id).toEqual("123");
  expect(intern.email).toEqual("vladimistar@gmail.com");
  expect(intern.school).toEqual("UofT");
});
