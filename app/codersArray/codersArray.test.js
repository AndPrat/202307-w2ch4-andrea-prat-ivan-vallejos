import CodersArray from "./CodersArray.js";

describe("Given a constructor function", () => {
  describe("When it recives an array of items for the class CodersArray", () => {
    test("Then it should return the number of items", () => {
      const codersArrayTest = [
        "Andrea",
        "Gloria",
        "Ana",
        "Mar",
        "Jose",
        "Ivan",
      ];
      const codersTest = new CodersArray(...codersArrayTest);
      expect(codersTest).toHaveLength(codersArrayTest.length);
    });
  });
});

expect();
