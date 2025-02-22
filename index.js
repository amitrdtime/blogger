const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbConnection = require('./helper/mongoose');

dbConnection()
.then(() => {
        console.log('Connected to MongoDB');
        
        const authrouter = require('./routers/Auther');
        app.use('/author', authrouter);

        const catrouter = require('./routers/category');
        app.use('/category', catrouter);

        const commentrouter = require('./routers/comments');
        app.use('/comment', commentrouter);

        const postrouter = require('./routers/post');
        app.use('/post', postrouter);

        app.listen(3000, () => {
          console.log(`Example app listening on port 3000`);
        });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
