import { injectable, inject } from 'tsyringe';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO'

@injectable()
class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  // throw new AppError('');

  public async execute({
    value,
    description,
    category_id,
    user_id,
  }: ICreateTransactionDTO): Promise<Transaction> {

    const transaction = await this.transactionsRepository.create({
      value,
      description,
      category_id,
      user_id,
    });

    return transaction;
  }
}

export default CreateTransactionService;
