const _JWT = require('./_JWT');

// check token
const isAuth = async (req, res, next) => {
  const _token = req.headers.authorization;
  if (_token) {
    try {
      const authData = await _JWT.check(_token);
      //  lưu AuthData = key auth trong req để dùng cho các route sau Check
      req.auth = authData;
      next();
    } catch (e) {
      return res.send('token error');
    }
  } else return res.send('Token invalid');
};

module.exports = {
  isAuth: isAuth,
};
