 // 한 모듈에 default값이 어러 개라 무조건 오류가 발생하는 코드
// export default 'hello';
export default function hello(name){
    console.log('hello'+name);
};

export default class Hello{
    constructor(greeting){
        this.greeting = greeting;
    }
    h1(name){
        console.log(`${this.greeting} ${name}`);
    }
}