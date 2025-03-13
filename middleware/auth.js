const ensureAuthenticated = (req, res, next) => {
  if (res.locals.user) {
    return next();
  }
  res.redirect('/');
};

const ensureAdmin = (req, res, next) => {
  if (res.locals.user && res.locals.user.role === 'admin') {
    return next();
  }
  res.redirect('/');
};

const ensureDoctor = (req, res, next) => {
  if (res.locals.user && res.locals.user.role === 'doctor') {
    return next();
  }
  res.redirect('/');
};

const ensurePatient = (req, res, next) => {
  if (res.locals.user && res.locals.user.role === 'patient') {
    return next();
  }
  res.redirect('/');
};

const ensureRole = (req, res, next, role) => {
  if (Array.isArray(role)) {
    if (role.includes(res.locals.user.role)) {
      return true;
    }
  }
  if (res.locals.user && res.locals.user.role === role) {
    return true;
  }
  return false;
};

export const Auth = {
  ensureAuthenticated,
  ensureAdmin,
  ensureDoctor,
  ensurePatient,
  ensureRole,
};
