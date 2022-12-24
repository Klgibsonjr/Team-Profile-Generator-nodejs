const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('createEngineer', () => {
    it('Should create an engineer object', () => {
      const engineer = new Engineer();

      expect(typeof engineer).toBe('object');
    });

    it('Should get engineer github from constructor function', () => {
      const testGithub = 'klgibsonjr';
      const engineer = new Engineer(
        'Ken',
        100,
        'kgibson@test.com',
        'klgibsonjr'
      );

      expect(engineer.github).toBe(testGithub);
    });

    it('Should get engineer role from getRole()', () => {
      const testRole = 'Engineer';
      const engineer = new Engineer(
        'Ken',
        100,
        'kgibson@test.com',
        'klgibsonjr'
      );

      expect(engineer.getRole()).toBe(testRole);
    });

    it('Should get engineer github username from getGithub()', () => {
      const testGithub = 'klgibsonjr';
      const engineer = new Engineer(
        'Ken',
        100,
        'kgibson@test.com',
        'klgibsonjr'
      );

      expect(engineer.getGithub()).toBe(testGithub);
    });
  });
});
