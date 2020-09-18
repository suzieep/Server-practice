# Server-study

<br/>

## 📌Javascript 기초 문법

### 1. 기본 자료형
#### (1) 원시 자료형 (Primitive Type)
- Boolean : ture or false
- Number : 숫자 자료형, 64bit 실수형(double)
- String : 문자열 자료형, **"와 '를 동일하게 취급**
- Symbol : 유일하고 변경할 수 없는 타입
- Null : Object type, '값'이 정해지지 않은 것을 의미
- Undefined : 타입 미지정, 초기화 안된 변수나 존재하지 않는 값
<br/>

✔ null과 undefined는 동등 연산자(==)와 일치 연산자(===)로 비교할 때, 그 결괏값이 다름
```javascript
null == undefined; // true
null === undefined; // false
//null과 undefined는 타입을 제외하면 같은 의미지만, 타입이 다르므로 일치하지는 않습니다.
```

(undefined type을 제외한 모든 것이 객체이므로 <br/>
원시 타입은 값이 정해진 객체로 취급되어 객체로서의 특징도 가진다.)
<br/>
<br/>

#### (2) 객체 자료형(Object Type)
- Object : 자바스크립트의 기본 타입, 프로퍼티의 정렬되지 않은 집합
  - Array
    - 객체 타입
    - 배열 요소의 타입이 고정 X -> 같은 배열 내 타입이 다를 수 있음
    - 배열 요소의 인텍스가 연속적이지 않아도 된 -> 배열요소가 비어있을 수 있다
    ```javascript
    var arr = [a,b,c];//배열생성
    var arr = Array(a,b,c);//배열생성

    arr.push(a);//배열추가
    arr[2] = a;//배열추가

    for (var item of arr){
      //arr의 elements 출력
      return item;
    }
    //for-of 엘리먼트를 하나씩 가져옴

    for (var item in arr){
      //arr의 elements 출력
      return arr[item];
    }
    //for-in index를 하나씩 가져옴

    arr.forEach(
      //arr의 elements 출력
      item => return item
    );
    //element를 하나씩 가져옴, callback 함수를 등록할 수 있음

    ```

 <br/>

  - Function
    - 객체 타입
    - 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록
    - javascript의 함수는 **일급객체**
      <br/> > 일급객체의 조건
        - 변수나 데이터 구조에 담을 수 있다
        - 다른 함수의 parameter로 전달 가능
        - 반환 값으로 사용 가능
        - 런타임 시 생성 가능
    ```javascript
    function funcName (params){

    } //함수 선언식 (호이스팅에 영향 받음)

    var funcName = function(params){

    }//함수 표현식 (호이스팅 영향X, 함수를 변수에 할당<-일급객체)
   
    ```

### 2. JSON (JavaScript Object Notation)
- 자바스크립트 객체 표현식
- name, value로 구성된 propertydml 정렬되지 않은 집합
- property의 값으로 함수가 오면 이 property를 method라 함
- 클라이언트와 통신 시 주로 사용 application/json

```javascript
var object = {
  keya : value,//property
  keyb : value1
}
//객체 접근
object.keya
object['keya']


var object = [
  { key1 : value1, key2 : value2 },
  { key1 : value3, key2 : value4 },
  { key1 : value5, key2 : value6 },
]
//객체 접근
object[idx].key1
object[idx]['key1']
```
<br/>
<br/>

## 📌 Javascript 최신 문법

### 	1. const, let

- const, let은 {블록 스코프}를 가지므로 블록 밖에서는 변수에 접근 불가

- var은 함수 스코프를 가지므로 블록과 관계없이 접근 가능 

  // hoisting -> 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것

  - 변수가 함수 내에서 정의 되었을 경우, 선언이 함수의 최상위로 올라감

  - 변수가 함수 바깥에서 정의 되었을 경우, 전역 컨텍스트의 최상위로 올라감

  - 함수 표현식으로 정의 되어있다면 호이스팅 발생

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

  

  

 
 
### 3. 프로미스
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

### 5. 템플릿 문자열
- 백틱(`)을 사용해 문자열 안에 변수를 넣을 수 있다.
```javascript
num1 + '더하기' + num2 + '는\'';//가독성도 떨어지고 escape 문 때문에 지저분함
`${num3} 더하기 ${num4}는 '${result}'`;//${변수}형식으로 기호없이 문자열에 넣을 수 있음
```
<br/>

### 6. 화살표 함수
- 간결한 표현식
- 매개 변수가 하나면 소괄호 생략 가능
- 상황에 따라 return문 생략 가능

```javascript
var funcName = (params) => {

}//함수 표현식 생성 - 화살표함수
```

<br/>
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

