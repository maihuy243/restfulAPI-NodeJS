const UserModel = require('../models/user.model');

const APIUser = {
  // Get User
  getUser: (req, res) => {
    UserModel.getAll((data) => {
      res.send({ result: data });
    });
  },
  // Details
  detailUser: (req, res) => {
    UserModel.detail(req.params.id, (response) => {
      res.send({ result: response });
    });
  },
  // Remove User
  removeUser: (req, res) => {
    const id = req.params.id;
    UserModel.remove(id, (response) => {
      res.send({ result: response });
    });
  },
  // Update User
  updateUser: (req, res) => {
    const data = req.body;
    console.log('data', data);
    UserModel.update(data, (response) => {
      res.send({ result: response });
    });
  },
  // Add User
  addUser: (req, res) => {
    const data = req.body;
    UserModel.addUser(data, (response) => {
      res.send({ result: response });
    });
  },
};

module.exports = APIUser;
