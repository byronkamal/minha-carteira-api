import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/provider/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let createUserService: CreateUserService;
let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('Should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'paulo',
      email: 'paulo@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });


  it('Should not be able to create a new user with email already exists', async () => {
    await createUserService.execute({
      name: 'paulo',
      email: 'paulo@gmail.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        name: 'paulo',
        email: 'paulo@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
