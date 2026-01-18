import express from 'express';

import config from './config/config.js';
import errorMiddleware from './middleware/error.middleware.js';

import {createController, getAllUserController, getUserByIdController} from './controllers/postgresql.controllers.js';

const app = express();  

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/users', createController);
app.get('/users', getAllUserController);
app.get('/users/:id', getUserByIdController);

//erro middleware
app.use(errorMiddleware);

// server port
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
})