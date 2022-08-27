const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Brennan', 1, 'bvlahcevic5@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name from getName function', () => {
    const employee = new Employee('Brennan', 1, 'bvlahcevic5@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id from getId function', () => {
    const employee = new Employee('Brennan', 1, 'bvlahcevic5@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email from getEmail function', () => {
    const employee = new Employee('Brennan', 1, 'bvlahcevic5@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Brennan', 1, 'bvlahcevic5@yahoo.com');

    expect(employee.getRole()).toEqual('Employee');
});