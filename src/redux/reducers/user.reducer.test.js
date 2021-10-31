// When testing client side code use import ... from ...;
const userReducer = require('../../src/redux/reducers/user.reducer.js');
//requiring userReducer so we can test it

describe('User reducer tests', () => {
    // keep this language descriptive and less technical,
    // for others who review the report
    test('The default value is an empty object.', (done) => {
        let action = {};
        let output = userReducer(undefined, action);
        // to output results, need to expect something
        // if unsure of what to put here 
        // expect(output).objectContaining({});
        expect(typeof output).toBe
        expect(output).toBeDefined();
    });
});
// each test should map 1 : 1