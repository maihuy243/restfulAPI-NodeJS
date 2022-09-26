const db = require('../config/connectdb');

const User = (user) => {
  id = user.id;
  username = user.username;
  age = user.age;
  address = user.address;
};

User.getAll = (result) => {
  db.query('select * from userinfo', (err, userData) => {
    if (err) {
      result(null);
    } else result(userData);
  });
};

User.detail = (id, result) => {
  db.query(`select * from userinfo where id = ${id}`, (err, user) => {
    if (err || user.length === 0) {
      result(null);
    } else {
      result(user[0]);
    }
  });
};

User.addUser = (data, result) => {
  db.query(`insert into userinfo set ?`, data, (err, user) => {
    if (err) {
      result(null);
    } else {
      result({ id: user.insertId, ...data });
    }
  });
};

User.remove = (id, result) => {
  db.query(`delete from userinfo where id = ${id}`, (err, user) => {
    if (err) {
      result(null);
    } else {
      result(`Delete id ${id} done !`);
    }
  });
};

User.update = (data, result) => {
  db.query(
    'update userinfo set username=?,age=?,address=? where id=?',
    [data.username, data.age, data.address, data.id],
    (err, res) => {
      if (err) {
        result(null);
      } else {
        result(data);
      }
    },
  );
};
module.exports = User;
