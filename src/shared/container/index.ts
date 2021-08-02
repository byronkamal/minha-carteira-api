import { container } from 'tsyringe';

import '@modules/users/provider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import Usersrepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import TransactionsRepository from '@modules/transactions/infra/typeorm/repositories/TransactionRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  Usersrepository,
);

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);
