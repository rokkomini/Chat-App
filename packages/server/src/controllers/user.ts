import { UserItem } from '@my-chat-app/shared';
import express, { Request, Response } from 'express';
import authenticateToken, { JwtRequest } from '../services/auth-service';
import { loginUser } from '../services/login-service';
import { saveUser } from '../services/register-service';

const userRouter = express.Router();

userRouter.get(
  '/getuser',
  authenticateToken,
  async (req: JwtRequest<UserItem>, res: Response) => {
    try {
      const user = req.jwt?.username;
      if (user) {
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

userRouter.post(
  '/register',
  async (req: Request<UserItem>, res: Response<UserItem | any>) => {
    const user = req.body;

    if (!user.username || !user.password) {
      res.status(400).send('Username or password is missing');
    }

    if (user.username.length < 6) {
      res.status(400).send('Username must be at least 6 characters');
    }

    if (user.password.length < 6) {
      res.status(400).send('Password must be at least 6 characters long');
    } else {
      try {
        res.status(201).send(await saveUser(req.body));
      } catch (e) {
        res.status(400).send('Choose a different username');
      }
    }
  }
);

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const foundUser = await loginUser(req.body);
    res.status(202).send(foundUser);
  } catch {
    res.status(401).send('Wrong username or password');
  }
});

export default userRouter;
