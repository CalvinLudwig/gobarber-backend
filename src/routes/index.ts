import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (_, response) => response.json({ itWorks: true }));
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
