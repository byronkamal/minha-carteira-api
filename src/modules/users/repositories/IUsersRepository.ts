import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
