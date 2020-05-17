import { Router } from 'express';
import AuthenticantionUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;
        const authenticateUser = new AuthenticantionUserService();
        const { user, token } = await authenticateUser.execute({ email, password });
        delete user.password;

        return response.json({ user, token });
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default sessionsRouter;
