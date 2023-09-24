import { spreadTwoArrays, whileLoop } from './index'

test('spread two arrays', () => {
    expect(spreadTwoArrays()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]))
})

test("Console do liczby 5", () => {
    const liczba = 0;
    expect(whileLoop()).toBe(console.log(liczba))
})