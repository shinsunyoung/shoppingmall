# node-pattern-sample

> 자주 사용되는 노드 프로젝트의 패턴들을 모아놓은 Repository

### Config File
보안 문제로 외부 시스템과 연결되는 프로퍼티 파일은 프로젝트 외부에 분리하고 Import 해서 사용하도록 함

`config/config-path.json` 파일에 프로퍼티 파일의 경로를 설정
```javascript
{
  "dbConfigPath": "/Users/jongholee/dev/workspace/project-config/node-pattern-sample/config/config.json"
}
```

import 할 때 아래와 같이 사용한다.
```javascript

//보안상 프로퍼티 정보는 외부에서 가져오도록 설정
const configPath = require(__dirname + '/../config/config-path.json').dbConfigPath;
const config = require(configPath)[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

```

### Express

[참고 문서 : express-generator - Node.js + Express 프로젝트 생성하기](https://jistol.github.io/nodejs/2017/09/07/express-generator/)

```
$ express --view=hbs
$ cd <project dir>
$ npm install
$ npm start 
```

Express와 자주 사용하는 라이브러리들 (파서, 로거 등)을 함께 셋업해준다. 
기본 포트는 3000, 프로필은 development
 
```javascript
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```


### PM2
노드 프로세스 관리 도구 (nodemon도 사용해봤는데, PM2가 더 좋은 듯 하다.)

현재 주로 사용하는 기능은 

1. 핫 리로드 - 코드 수정시 바로 반영
2. 서비스 죽으면 자동으로 재기동

기본 세팅은 아래와 같다.
```javascript
module.exports = {
    apps: [
        {
            // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
            name: "Your Service Name",
            // pm2로 실행될 파일 경로
            script: "./bin/www",
            // 개발환경시 적용될 설정 지정
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            // 배포환경시 적용될 설정 지정
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production"
            },
            watch : true,
            ignore_watch : ["logs"]
        }
    ]
};
```
### Mocha

- 동기 / 비동기 각 경우에 대한 단위 테스트
- Transaction Rollback (적용 예정)
- Mocking (적용 예정)

```javascript
const assert = require('assert');
const userRepository = require('../../persistence/userRepository');

describe('userRepository', () => {
    it('should return 2 elements when call userCategories', function (done) {
        userRepository.getUsers().then((val) => {
            assert.strictEqual(val[0].id, 1);
            assert.strictEqual(val[0].name, '이종호');
            done();
        })
    });
});
```

### Sequelize

- ORM of Javascript

```
npm i sequelize mysql2
npm i -g sequelize-cli
sequelize init
```

`sequelize-cli` 가 생성해주는 index.js를 수정해야 한다.

```javascript
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

```



### CI & CD (적용 예정)

Docker 적용 예정

- [참고 문서 : Travis CI, AWS CodeDeploy, Docker 로 배포 자동화 및 무중단 배포 환경 구축하기 - (1)](https://velog.io/@jeff0720/Travis-CI-AWS-CodeDeploy-Docker-%EB%A1%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%EB%B0%8F-%EB%AC%B4%EC%A4%91%EB%8B%A8-%EB%B0%B0%ED%8F%AC-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0) 