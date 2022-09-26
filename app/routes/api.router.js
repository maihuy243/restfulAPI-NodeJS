const APIUser = require('../controllers/api.controller');
module.exports = (app) => {
  // Update
  app.put('/api/user/update', APIUser.updateUser);
  // Add
  app.post('/api/user/add-user', APIUser.addUser);
  // Remove
  app.delete('/api/user/delete/:id', APIUser.removeUser);
  // Details
  app.get('/api/user/:id', APIUser.detailUser);
  // Get user
  app.get('/api/user', APIUser.getUser);
};
