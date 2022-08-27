const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Brennan', 1, 'bvlahcevic5@yahoo.com', 113);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

test('gets Manager role from getRole function', () => {
    const manager = new Manager('Brennan', 1, 'bvlahcevic5@yahoo.com', 113);

    expect(manager.getRole()).toEqual('Manager');
});