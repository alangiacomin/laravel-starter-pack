import { isEmptyString, trimStart, upperFirst } from './stringHelper';

describe('isEmptyString', () => {
  test('null string', () => {
    const empty = isEmptyString(null);
    expect(empty).toBe(true);
  });

  test('undefined string', () => {
    const empty = isEmptyString(undefined);
    expect(empty).toBe(true);
  });

  test('not a string', () => {
    const empty = isEmptyString(Array(7));
    expect(empty).toBe(false);
  });

  test('empty string', () => {
    const empty = isEmptyString('');
    expect(empty).toBe(true);
  });

  test('full string', () => {
    const empty = isEmptyString('The quick brown fox jumped over the lazy dogs');
    expect(empty).toBe(false);
  });
});

describe('trimStart', () => {
  it('null string', () => {
    const trimmed = trimStart(null);
    expect(trimmed).toEqual('');
  });

  it('undefined string', () => {
    const trimmed = trimStart(undefined);
    expect(trimmed).toEqual('');
  });

  it('not a string', () => {
    const trimmed = trimStart(Array(7));
    expect(trimmed).toEqual('');
  });

  it('empty string', () => {
    const trimmed = trimStart('');
    expect(trimmed).toEqual('');
  });

  it('no trim, default char', () => {
    const trimmed = trimStart('xProva');
    expect(trimmed).toEqual('xProva');
  });

  it('no trim, empty char', () => {
    const trimmed = trimStart('xProva', '');
    expect(trimmed).toEqual('xProva');
  });

  it('first char', () => {
    const trimmed = trimStart('xProva', 'x');
    expect(trimmed).toEqual('Prova');
  });

  it('not first char', () => {
    const trimmed = trimStart('xProva', 'P');
    expect(trimmed).toEqual('xProva');
  });

  it('array chars', () => {
    const trimmed = trimStart('xProva', ['P']);
    expect(trimmed).toEqual('xProva');
  });
});

describe('upperFirst', () => {
  test('null string', () => {
    const upper = upperFirst(null);
    expect(upper).toEqual('');
  });

  test('undefined string', () => {
    const upper = upperFirst(undefined);
    expect(upper).toEqual('');
  });

  test('not a string', () => {
    const upper = upperFirst(Array(7));
    expect(upper).toEqual('');
  });

  test('empty string', () => {
    const upper = upperFirst('');
    expect(upper).toEqual('');
  });

  test('one char string', () => {
    const upper = upperFirst('a');
    expect(upper).toEqual('A');
  });

  test('complex string', () => {
    const upper = upperFirst('tHE QUICK BROWN FOX JUMPED OVER THE LAZY DOGS');
    expect(upper).toEqual('The quick brown fox jumped over the lazy dogs');
  });
});
