const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('createIntern', () => {
    it('Should create an intern object', () => {
      const intern = new Intern();

      expect(typeof intern).toBe('object');
    });

    it('Should get intern school from constructor function', () => {
      const testSchool = 'UCLA';
      const intern = new Intern('Ken', 100, 'kgibson@test.com', 'UCLA');

      expect(intern.school).toBe(testSchool);
    });

    it('Should get intern role from getRole()', () => {
      const testRole = 'Intern';
      const intern = new Intern('Ken', 100, 'kgibson@test.com', 'UCLA');

      expect(intern.getRole()).toBe(testRole);
    });

    it('Should get intern school name from getSchool()', () => {
      const testSchool = 'UCLA';
      const intern = new Intern('Ken', 100, 'kgibson@test.com', 'UCLA');

      expect(intern.getSchool()).toBe(testSchool);
    });
  });
});
