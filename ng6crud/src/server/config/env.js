const env = {
    database: 'test',
    username: 'george',
    password: 'password',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  module.exports = env;