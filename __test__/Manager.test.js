const Employee = require('../lib/Manager');

test('Create new manager', () => {
    const employee = new Manager('Trae Valdez', 1234, 'trae@traemail.com', 5555551234);

    expect(employee.name).toBe("Trae Valdez");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('Check for manager class', () => {
    const employee = new Intern('Trae Valdez', 1234, 'trae@traemail.com', 5555551234);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getTitle()).toBe('Manager');
});