const MenuController = require("../controllers/MenuController");

// calling jasmine's describe() method, passing the name of the test suite and a function defining the suite
describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  });
  describe("#getContactCount()", () => {
    // declaring the spec
    it("should return 0 when no contacts are in the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });
    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1);
    });
    it('should return the string "Learning is a life-long pursuit"', () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });
  });
});
