import {handler} from "../../src/f2/lambda";

describe('numberFactory', function () {
  it('returns the number 10', async ()=>{
    const result =await handler({msg:'dummy event'}, undefined, undefined);
    expect(result).toBeTruthy();

    expect(result.statusCode).toBe(200);
    expect(typeof result.message).toBe('string');
  })
});