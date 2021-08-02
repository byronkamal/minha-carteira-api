import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import ShowTransactionsService from '@modules/transactions/services/ShowTransactionsService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { value, description, category_id, user_id } = request.body;

    const createTransactionService = container.resolve(
      CreateTransactionService,
    );

    const transaction = await createTransactionService.execute({
      value,
      description,
      category_id,
      user_id,
    });

    return response.json(classToClass(transaction));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id }  = request.params;
    let userIdParsed = parseInt(user_id)

    const showTransactionsService = container.resolve(
      ShowTransactionsService,
    );

    const transactions = await showTransactionsService.execute(userIdParsed);

    return response.json(classToClass(transactions));
  }
}
