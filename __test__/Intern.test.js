const { Intern } = require('../lib/Intern');

test('Create new Intern', () => {
    const employee = new Intern('Trae Valdez', 1234, 'trae@traemail.com', 'UTPA');

    expect(employee.name).toBe("Trae Valdez");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('Check for Intern class', () => {
    const employee = new Intern('Trae Valdez', 1234, 'trae@traemail.com', 'UTPA');

    expect(employee.getEmployeeName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getTitle()).toBe('Intern');
});