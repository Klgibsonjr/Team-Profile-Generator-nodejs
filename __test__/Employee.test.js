const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('createEmployee', () => {
    it('Should create an employee object', () => {
      const employee = new Employee();

      expect(typeof employee).toBe('object');
    });

    it();
  });
});
