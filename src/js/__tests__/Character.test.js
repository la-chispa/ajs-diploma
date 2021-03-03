import Character from '../Character';
import Bowman from '../Bowman';

test('object should be created by child classes, error', () => {
  function createByCharacter() {
    return new Character(1);
  }
  expect(createByCharacter).toThrow(new Error('Object should be created by child classes'));
});

test('object was created by class Bowman', () => {
  expect(new Bowman(1)).toBeInstanceOf(Bowman);
});
