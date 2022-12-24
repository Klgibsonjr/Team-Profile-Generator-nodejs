const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('createEmployee', () => {
    it('Should create an employee object', () => {
      const employee = new Employee();

      expect(typeof employee).toBe('object');
    });

    it('Should get employee name via constructor function', () => {
      const testName = 'Ken';
      const employee = new Employee(testName);

      expect(employee.name).toEqual(testName);
    });

    it('Should get employee ID via constructor function', () => {
      const testID = 100;
      const employee = new Employee('Ken', testID);

      expect(employee.id).toEqual(testID);
    });

    it('Should get employee email via constructor function', () => {
      const testEmail = 'kgibson@test.com';
      const employee = new Employee('Ken', 100, testEmail);

      expect(employee.email).toBe(testEmail);
    });

    it('Should get employee name from getName()', () => {
      const testName = 'Ken';
      const employee = new Employee(testName);

      expect(employee.getName()).toEqual(testName);
    });

    it('Should get employee ID from getId()', () => {
      const testID = 100;
      const employee = new Employee('Ken', testID);

      expect(employee.getId()).toEqual(testID);
    });

    it('Should get employee email from getEmail()', () => {
      const testEmail = 'Kgibson@test.com';
      const employee = new Employee('Ken', 100, testEmail);

      expect(employee.getEmail()).toEqual(testEmail);
    });

    it('Should get employee role from getRole()', () => {
      const testRole = 'Employee';
      const employee = new Employee('Ken', 100, 'kgibson@test.com');

      expect(employee.getRole()).toBe(testRole);
    });
  });
});
