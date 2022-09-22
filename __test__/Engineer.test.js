const { Engineer } = require('../lib/Engineer');

test('Create new Engineer', () => {
    const employee = new Engineer('Trae Valdez', 1234, 'trae@traemail.com', 'traevaldez');

    expect(employee.name).toBe("Trae Valdez");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test('Check for Engineer class', () => {
    const employee = new Engineer('Trae Valdez', 1234, 'trae@traemail.com', 'traevaldez');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGitHub()).toBe(employee.github);
    expect(employee.getTitle()).toBe('Engineer');
});