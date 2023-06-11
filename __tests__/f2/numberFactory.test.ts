import {numberFactory} from "../../src/f2/numberFactory";

describe('numberFactory', function () {
 it('returns the number than 0', ()=>{
   const result= numberFactory();
   expect(result).toBeGreaterThan(0)
 })
});