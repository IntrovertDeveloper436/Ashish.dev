import express from 'express';
const authRouter = express.Router();

import { signUp, logIn, logOut,sig} from '../controllers/auth.controller.js';

authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.get('/sig', sig);
authRouter.get('/logout', logOut);


export default authRouter;