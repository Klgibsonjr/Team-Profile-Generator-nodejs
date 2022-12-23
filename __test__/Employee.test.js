const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('createTeam', () => {
    it('Should create an employee object', () => {
      const employee = new Employee();

      expect(typeof employee).toBe('object');
    });
  });
});
