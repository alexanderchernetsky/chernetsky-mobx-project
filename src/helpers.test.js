import { findObjectWithTheSameProperty } from "./helpers";

describe('function findObjectWithTheSameProperty test', () => {
  const someArray = [{recipe_id: '1a2b3c'},{recipe_id: '4d5e6r'}, {recipe_id: '7y8u9i'}];
  const someId = '4d5e6r';
  const someAnotherId = 'no1no2no';

  it('should return true when array contains object with someId', () => {
    expect(findObjectWithTheSameProperty(someArray, someId)).toBeTruthy();
  });

  it('should return false when array does not contain object with someAnotherId', () => {
    expect(findObjectWithTheSameProperty(someArray, someAnotherId)).toBeFalsy();
  });
});