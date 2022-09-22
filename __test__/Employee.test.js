const Employee = require('../lib/Employee');

test('Create new Employee', () => {
    const employee = new Employee('Trae Valdez', 1234, 'trae@traemail.com');

    expect(employee.name).toBe("Trae Valdez");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Check for Employee class', () => {
    const employee = new Employee('Trae Valdez', 1234, 'trae@traemail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getTitle()).toBe('Employee');
});