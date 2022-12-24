const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('createManager', () => {
    it('Should create an manager object', () => {
      const manager = new Manager();

      expect(typeof manager).toBe('object');
    });

    it('Should get manager office number from constructor function', () => {
      const testOfficeNumber = 111;
      const manager = new Manager(
        'Ken',
        100,
        'kgibson@test.com',
        testOfficeNumber
      );

      expect(manager.officeNumber).toBe(testOfficeNumber);
    });

    it('Should get manager role from getRole()', () => {
      const testRole = 'Manager';
      const manager = new Manager('Ken', 100, 'kgibson@test.com', 111);

      expect(manager.getRole()).toBe(testRole);
    });

    it('Should get manager office number getOfficeNumber()', () => {
      const testOfficeNumber = 111;
      const manager = new Manager('Ken', 100, 'kgibson@test.com', 111);

      expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    });
  });
});
