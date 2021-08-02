import { Router } from 'express';

import TransactionsController from '../controller/TransactionsController';

const transactionRouter = Router();
const transactionsController = new TransactionsController();

transactionRouter.get('/user/:user_id', transactionsController.show)
transactionRouter.post('/', transactionsController.create);

export default transactionRouter;
