import { Repository, getRepository } from 'typeorm';

import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

import Transaction from '../entities/Transaction';

class TransacitonRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async create({
    value,
    description,
    category_id,
    user_id,
  }: ICreateTransactionDTO): Promise<Transaction> {
    let transaction: Transaction;
    transaction = this.ormRepository.create({
      value,
      description,
      category_id,
      user_id,
    });

    await this.ormRepository.save(transaction);
    return transaction;
  }

  public async show(user_id: number): Promise<Transaction[] | undefined> {
    const transactions = await this.ormRepository.find({
      where: { user_id },
      relations: ['category'],
    });

    return transactions;
  }
}

export default TransacitonRepository;
