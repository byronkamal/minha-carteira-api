import { Router } from 'express';

import TransactionsController from '../controller/TransactionsController';

const trasactionRouter = Router();
const transactionsController = new TransactionsController();

trasactionRouter.post('/', transactionsController.create);

export default trasactionRouter;
