import express from 'express';
const authRouter = express.Router();

import { signUp, logIn, logOut} from '../controllers/auth.controller.js';

authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.get('/logout', logOut);


export default authRouter;