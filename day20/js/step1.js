/* 
    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = {}
            객체내 속성추가 : object.새로운속성명 = 값;
            객체내 속성값 호출 : object.속성명
            객체내 속성의 값 변경 : object.기존속성명 = 깂
        - 배열도 객체
        - 함수도 객체
        - 기본자료형(숫자, 불, 문자열) 객체 아니다.
            1. 기본자료형 ---> 객체로 변환 (객체 자료형, 래핑 클래스)
                - 왜?? 객체로 활용하려고 (속성/ 메소드를 사용하니까. --부가자료--부가기능 첨부)

            2. 
                - new : 객체를 만들때 쓰는 일반적인 new 연산자 (인스턴스화)
                new Number(숫자자료형)
                new String(문자자료형)

            3. 문자열 타입 [일시적 승급]
                - 속성을 추가는 할 수 없지만. js만든 사람이 제공하는 속성은 사용이 가능하다.
*/

// p.257
const a = []                // [] 대괄호 사용했으므로 배열(a 상수에 배열 자료저장)
a.sample = 10;              // 객체.새로운속성명 = 값;      // 객체에 속성 추가
console.log(a.sample)
console.log(typeof a)       // typeof 변수/상수; 해당 상수/변수 저장된 자료의 타입 확인
console.log(Array.isArray(a))   // Array.isArray(상수/변수) : 해당 상수/변수에 자료가 배열

function b(){}
b.sample = 10;              
console.log(b.sample)
console.log(typeof b)       // *함수는 객체의 특성을 환벽하게 가지고 있음.[js]


// p.258
const c = 273;
c.sample = 10;
console.log(c.sample)       // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.

const d = '안녕하세요';
d.sample = 10;
console.log(d.sample)       // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.
console.log(d.length)       // 일시적 승급 (기본자료형을 객체자료형으로 승급)

const e = true
e.sample = 10;
console.log(e.sample)       // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할 수 없다.

// p.260
const f = new Number(273)
console.log(f)              // 273X ---> {273}
f.sample = 10
console.log(f)              // 273, sample : 10}    // 객체는 키와 값= 속성
console.log(f.valueOf())    // 객체명.valueOf();    // 속성이 아닌 값 추출
console.log(typeof f)

const g = Number(273)
console.log(g)

console.log('안녕하세요'.length)
console.log('안녕하세요'.anchor('greeting'))    // 문자열 기본자료형도 .온점 메소드 사용 가능[권장X]
console.log('안녕하세요'.bold())

const h = '안녕하세요.';
h.sample = 10;
console.log(h.sample);

// p.263
Number.prototype.sample =10;
const i = 273;
console.log(i.sample);  // 가능

const j = 100;
console.log(j.sample);  // 가능

const i2 = new Number(273);
i2.sample2 = 10
console.log(i2.sample2);  // 가능

const j2 = new Number(273);
console.log(j2.sample2);  // 가능

// p.264
//Number.prototype.power = function(n){     // n 매게변수 함수호출시 ()넣어주는 값
Number.prototype.power = function(n=2){     // n=2 매개변수 함수호출시 ()넣어주는 값 (+만약에 매개변수가 없으면 초기값)
    console.log(`n : ${n}`)
    console.log(`this : ${this.valueOf()}`)
    return this.valueOf() ** n
}

const a2 = 12;
console.log(a2.power())         // n = 2, this = 12, return : 144
console.log(a2.power(3));       // n = 3, this = 12, return : 1728
console.log(a2.power(4));       // n = 4, this = 12, return : 20736

// p.265
const h2 = '안녕하세요';
console.log(h2.indexOf('안녕'))
console.log(h2.indexOf('하세'))
console.log(h2.indexOf('자바'))