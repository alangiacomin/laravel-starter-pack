const hasRole = (user, role) => {
  if (role && (user.roles ?? []).map(x=>x.name).includes(role)) {
    return true;
  }
  return false;
};

const hasPermission = (user, perm) => {
  switch (perm) {
    case 'guests_only':
      return !(user.id > 0);
    case 'registered_only':
      return user.id > 0;
    default:
      if (hasRole(user, 'admin')) {
        return true;
      }
      if (perm && !(user.permission_list ?? []).includes(perm)) {
        return false;
      }
      return true;
    }
};

const hasPermission2 = (user, perm) => {
  if (perm && perm.startsWith('special_')) {
    switch (perm.substring(8)) {
      case 'guests_only':
        return !(user.id > 0);
      case 'users_only':
        return user.id > 0;
      default:
        return false;
    }
  }
  if (hasRole(user, 'admin')) {
    return true;
  }
  if (perm && !(user.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
};

const hasStrictPermission = (user, perm) => {
  if (perm && !(user.permission_list ?? []).includes(perm)) {
    return false;
  }
  return true;
};

export {
  hasRole,
  hasPermission,
  hasStrictPermission,
};
