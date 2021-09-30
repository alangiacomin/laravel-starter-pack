import { hasPermission, hasRole, hasStrictPermission } from './userHelper';

describe('hasRole', () => {
  it('description', () => {
    const result = hasRole(null);
    expect(result).toBe(false);
  });

  it('description', () => {
    const result = hasRole({ role_list: ['test'] }, 'test');
    expect(result).toBe(true);
  });
});

describe('hasPermission', () => {
  it('description', () => {
    const result = hasPermission({});
    expect(result).toBe(true);
  });

  it('description', () => {
    const result = hasPermission({}, 'special_perm');
    expect(result).toBe(false);
  });

  it('description', () => {
    const result = hasPermission({ permission_list: [] }, 'my_perm');
    expect(result).toBe(false);
  });

  it('description', () => {
    const result = hasPermission({ role_list: ['admin'] });
    expect(result).toBe(true);
  });

  it('description', () => {
    const result = hasPermission({ }, 'my_perm');
    expect(result).toBe(false);
  });
});

describe('hasStrictPermission', () => {
  it('description', () => {
    const result = hasStrictPermission(null);
    expect(result).toBe(true);
  });

  it('description', () => {
    const result = hasStrictPermission({ permission_list: [] }, 'my_perm');
    expect(result).toBe(false);
  });

  it('description', () => {
    const result = hasStrictPermission({ }, 'my_perm');
    expect(result).toBe(false);
  });
});
