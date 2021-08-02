import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, value, description, category_id, user_id } = request.body;

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
}
