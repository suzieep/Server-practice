# Server-study

<br/>

## 📌 Javascript

### 	1. const, let

- const, let은 {블록 스코프}를 가지므로 블록 밖에서는 변수에 접근 불가

- var은 함수 스코프를 가지므로 블록과 관계없이 접근 가능 // hoisting

- const : 한번 값을 할당하면 다른 값을 할당 불가(상수)

- 자바스크립트에서는 한 번 초기화했던 변수에 다른 값을 할당하는 경우가 적기 때문에 기본적으로 const를 사용하고 다른 값을 할당해야 하는 상황이 생겼을 때 let을 사용

  <br/>

### 	2. 객체 리터럴

- 속성명과 변수명이 동일한 경우에 한 번만 써도 된다

  ```javascript
  {name: name, age: age} //ES5
  {name, age} //ES2015
  ```

  <br/>

  

  

  ### 3.  프로미스

- 콜백 대신 프로미스 사용 -> 콜백 지옥 현상 극복

  ```javascript
  const condition = ture;
  const promise = new Promise((resolve, reject) => {
   if (condition) {
   	resolve('성공');
   } else {
    reject('실패');
   }
  });
  
  promise
   .then((message) => {
    console.log(message);
   })
  	.then((error) => {
   		 console.error(error);
   })
  	.finally(() => {
    	console.log('무조건');
  });
  
  ```

  #### <br/>프로미스의 세가지 상태

  - Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

  - Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

  - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

    <br/>

  ![img](https://joshua1988.github.io/images/posts/web/javascript/promise.svg)

##  

#### <br/>

#### 		- Promise chaining : 여러개의 프로미스를 연결해서 사용

### <br/>

### 	4.  Async/await

- 프로미스를 사용해도 then과 catch가 반복됨 -> Async/await 으로 코드 정리

- 동기식 코드 순서와 실행 순서가 같음

- 에러 처리를 위해 await을 try-catch 문으로 감싸야 함

  ```javascript
  async func() => {
    try{
      console.log('다 찾았니'); 
      const user = await Users.findOne('zero');
      const updateduser = await Users.update('zero', 'nero');
      const removedUser = await Users.remove('nero');
    } catch(err) {
      console.error(err);
    }
  }
  func()
  ```

<br/>





---

## 📌 Node

### <br/>	1. Non-blocking

- Non-blocking : 이전 작업이 완료될 때까지 대기하지 낳고 다음 작업을 수행함
- Blocking : 이전 작업이 끝나야만 다음 작업을 수행

### <br/>	2. Single-thread

- 노드는 싱글스레드
- 싱글스레드 + 논 블로킹 모델

<br/>

### 	3. REPL

- Read - 유저의 값을 받아들여 Javascript 데이터 구조로 저장
- Eval - 데이터 처리
- Print - 처리결과를 출력
- Loop - 유저가 ^C를 눌러 종료할 때까지 반복

<br/>

### 	4. Url - WHATWG와 노드의 주소 체계

![[node.js] 내장모듈](https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MTlfMTg3%2FMDAxNTM0NjIzNTMyNjk5.eyeWXum2OBv_2boPLVKf3CLXk6B9jP1Ig6NaV6AnLXsg.vj3Cv12UGRu6DdKIUrcbfj2j4ays6-dnQkC_6-B7Aqwg.PNG.buskerlic%2Fimage.png&type=sc960_832)

---

## 📌 Module

### <br/>	1. Crypto

- 해시 생성과 암호화를 수행하는 모듈
- 복호화 불가능한 암호화 방식
- 비밀번호 암호화에 주로 사용
- 주로 해시기법 사용

### <br/>

```javascript
var crypto = require('crypto');

var shasum = crypto.createHash('sha512');

shasum.update('q!w@e#r$');

var output = shasum.digest('hex');

console.log('Result from Crpyto_Hashing : ', output);
```

해싱의 가장 큰 특징은

1. 같은 문자열을 해싱하면 같은 값이 나온다
2. 다른 문자열을 해싱해도 같은 값이 나올 수도 있다.(확률이 매우 적지만)
3. 원래 값으로 돌리는 것은 불가능하다.

```javascript
var crypto = require('crypto');

var key= 'lumpen';
var input = 'password';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input,'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('before : ',input);
console.log('after encryption : ', cipheredOutput);
console.log('after release : ', decipheredOutput);
```



### <br/>	2. File system module

- 파일 시스템에 접근하는 모듈
- 파일 생성 삭제 읽기 쓰기 등 수행하거나 폴더 생성 삭제

<br/>

### 	3. REPL

- Read - 유저의 값을 받아들여 Javascript 데이터 구조로 저장
- Eval - 데이터 처리
- Print - 처리결과를 출력
- Loop - 유저가 ^C를 눌러 종료할 때까지 반복

## <br/>📌 REST API

| HTTP 메서드 | 주소           | 역할                     |
| ----------- | -------------- | ------------------------ |
| GET         | /              | restFront.html 파일 제공 |
| GET         | /about         | About.html 파일 제공     |
| GET         | /users         | 사용자 목록 제공         |
| GET         | 기타           | 기타 정적 파일 제공      |
| POST        | /user          | 사용자 등록              |
| PUT         | /user/사용자id | 해당 id의 사용자 수정    |
| DELETE      | /user/사용자id | 해당 id의 사용자 제거    |

## <br/>📌 HTTP Status Code

| Code | Status                  |
| ---- | ----------------------- |
| 200  | 요청 성공               |
| 201  | 원격지 서버에 파일 생성 |
| 302  | 페이지 이동             |
| 304  | 로컬 캐쉬정보 이용      |
| 401  | 인증  실패              |
| 403  | 접근 금지               |
| 404  | 페이지 없음             |
| 500  | 서버 에러               |

