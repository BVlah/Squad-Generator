const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Brennan', 1, 'bvlahcevic5@yahoo.com', 'James Madison');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets Intern school from getSchool function', () => {
    const intern = new Intern('Brennan', 1, 'bvlahcevic5@yahoo.com', 'James Madison');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets Intern role from getRole function', () => {
    const intern = new Intern('Brennan', 1, 'bvlahcevic5@yahoo.com', 'James Madison');

    expect(intern.getRole()).toEqual('Intern');
});