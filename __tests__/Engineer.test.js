const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Brennan', 1, 'bvlahcevic5@yahoo.com', 'BVlah');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer github from getGithub function', () => {
    const engineer = new Engineer('Brennan', 1, 'bvlahcevic5@yahoo.com', 'BVlah');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets Engineer role from getRole function', () => {
    const engineer = new Engineer('Brennan', 1, 'bvlahcevic5@yahoo.com', 'BVlah');

    expect(engineer.getRole()).toEqual('Engineer');
});