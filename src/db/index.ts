import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    logging: config.db.logging,
    dialect: 'mysql',
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000
    }
  }
);

const models = [];

fs.readdirSync(__dirname + '/models')
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== 'index.ts'
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname + '/models', file));
    models[model.name] = model;
  })

Object.keys(models).forEach(function(modelName) {
  if (models[modelName].options.hasOwnProperty('associate')) {
    models[modelName].options.associate(models);
  }
});

export { models, sequelize };
  