const homeController = require('../controllers/home.controller');
const JWT = require('../config/_JWT');

module.exports = (app) => {
  app.get('/', homeController.homePage);

  // JWT-------------------

  // create token
  app.get('/token', async (req, res) => {
    const user = {
      username: 'Admin',
      email: 'Admin@gmail.com',
    };
    const _token = await JWT.make(user);
    res.send({ token: _token });
  });

  // check token

  app.get('/token_check', async (req, res) => {
    try {
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6IkFkbWluQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NjQxNzg2MDEsImV4cCI6MTY2NDE4MjIwMX0.hgkuO0Zf7ZEede5gHDj-ZdF_QHDOUkWlCVI3wKcYd80';
      const data = await JWT.check(token);
      res.send({ data: data });
    } catch (e) {
      res.send({ data: 'Token invalid ' });
    }
  });
};
