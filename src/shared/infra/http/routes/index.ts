import { Router } from 'express';

import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import transactionRouter from '../../../../modules/transactions/infra/http/routes/trasaction.routes';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/transaction', transactionRouter)

export default routes;
