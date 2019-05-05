'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

//보안상 프로퍼티 정보는 외부에서 가져오도록 설정
const configPath = require(__dirname + '/../config/config-path.json').dbConfigPath;
const config = require(configPath)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//모델 정보 읽어옴
db.User = require('./user')(sequelize, Sequelize);

//TODO 모델 관계 매핑

module.exports = db;
