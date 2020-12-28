import { quick } from '../src/index';

describe('Quick sort', () => {
  it('should numerically order an unordered array', () => {
    const exampleArr = [1, 3, 5, 6, 4, 2, 8, 1];
    expect(quick(exampleArr)).toEqual(exampleArr.sort());
  });
  it('should numerically order an unordered array of objects', () => {
    const exampleArr = [{ id: 3 }, { id: 1 }, { id: 9 }, { id: 8 }];
    const soln = [{ id: 1 }, { id: 3 }, { id: 8 }, { id: 9 }];
    const selected = quick(exampleArr, 'id');
    let match = true;
    for (let i = 0; i < exampleArr.length; i++) {
      if (selected[i].id !== soln[i].id) {
        match = !match;
      }
    }
    expect(match).toBe(true);
  });
  it('should return nothing if array containes string', () => {
    const exampleArr = [1, 3, 5, 'hello', 1];
    const exampleArr2 = [1, 3, 5, false];
    expect(quick(exampleArr)).toBe(undefined);
    expect(quick(exampleArr2)).toBe(undefined);
  });
  it('should return nothing if array of objects containes key/val pair with not numerical val', () => {
    const exampleArr = [{ id: 3 }, { id: 'hello' }, { id: 9 }, { id: 8 }];
    const exampleArr2 = [{ id: 3 }, { id: true }, { id: 9 }, { id: 8 }];
    expect(quick(exampleArr, 'id')).toBe(undefined);
    expect(quick(exampleArr2, 'id')).toBe(undefined);
  });
});
