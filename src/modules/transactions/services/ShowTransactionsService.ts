import { injectable, inject } from 'tsyringe';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

@injectable()
class ShowTransactionsService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  // throw new AppError('');

  public async execute(user_id: number): Promise<Transaction[] | undefined> {
    const transactions = await this.transactionsRepository.show(user_id);

    return transactions;
  }
}

export default ShowTransactionsService;
