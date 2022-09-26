const jwt = require('jsonwebtoken');
const _TOKEN = require('./_TOKEN');

// Make -> Tạo mã
// Check -> xác thực token, ( đúng, sai , hết hạn , .v.v)

// make

let make = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: user },
      _TOKEN.ACCESS_TOKEN,
      {
        algorithm: 'HS256',
        expiresIn: _TOKEN.TOKEN_TIME_LIFE,
      },
      (err, _token) => {
        if (err) {
          return reject(err);
        } else return resolve(_token);
      },
    );
  });
};

// check

let check = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, _TOKEN.ACCESS_TOKEN, (err, data) => {
      if (err) return reject(err);
      else return resolve(data);
    });
  });
};

module.exports = {
  make: make,
  check: check,
};
