const math = require("../math");

test('soma 2 + 3 = 5', ()=>{
    expect(math.add(2,3)).toBe(5);
})
test('subtracao 3 - 2 = 1', ()=>{
    expect(math.subtract(3, 2)).toBe(1);
})
test('multiplicação 2 x 2 = 4', ()=>{
    expect(math.multply(2, 2)).toBe(4);
})
test('dividido 9 / 3 = 3', ()=>{
    expect(math.divide(9,3)).toBe(3);
})


