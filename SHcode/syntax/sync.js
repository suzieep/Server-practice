var fs = require('fs');

//readFileSync
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
//파일을 읽는 작업이 끝나면 함수 안 실행
console.log(result);
});

console.log('C');