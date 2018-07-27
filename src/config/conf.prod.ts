module.exports = {
  env: 'dev',
  path: 'http://127.0.0.1:4001/static/'
  server: {
    host: 'http://127.0.0.1',
    port: 4000
  },
  webpack: {
    port: 4001,
    path: '/static/'
  },
  db: {
    database: 'db_blog',
    username: 'root',
    password: '12345678',
    port: '3306',
    logging: false,
    host: 'localhost'
  },
  redis: {
    host: 'http://127.0.0.1',
    port: 6379
  }
}