import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

import Transaction from '../infra/typeorm/entities/Transaction';

export default interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  show(user_id: number): Promise<Transaction[] | undefined>;
  // getBalance(user_id: number): Promise<number | null >;
}
