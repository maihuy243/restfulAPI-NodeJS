require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const apiRouter = require('./routes/api.router');
const homeRouter = require('./routes/home.router');
const _isAuthMiddleWare = require('./config/_AuthMiddleWare');

// --

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
homeRouter(app);
app.use(_isAuthMiddleWare.isAuth); // check token hợp lệ mới được truy cập vào route dưới
apiRouter(app);

app.listen(port, () => console.log('app running by port : ', port));
