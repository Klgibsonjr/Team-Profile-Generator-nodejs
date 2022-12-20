const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('createEmployee', () => {
    it('', () => {
      const employee = new Employee();

      expect(typeof employee).toBe('object');
    });
  });
});
