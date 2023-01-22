import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'localhost';
  createConnection({
    ...options,
  });
});

// import { DataSource } from 'typeorm';

// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   username: 'admin',
//   password: 'admin',
//   database: 'db_teste',
// });

// AppDataSource.initialize()
//   .then(() => console.log('Data Source has been initialized!'))
//   .catch(() => console.log('Error during Data Source initialization'));
