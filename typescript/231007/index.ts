type sex = 'male' | 'female'
interface userType {
    name: string,
    age: number,
    sex: sex,
}
enum Auth {
    admin = 0,
    user = 1,
    guest = 2
}
enum cafe {
    americano = 'americano',
    latte= 'latte',
}
// 숫자 안쓰면 0부터 1씩 늘어남
// 숫자, 문자열 같이 사용할 수 있지만 통일하는 것이 좋다

enum cake {
    chocolate,
    vanilla,
    strawberry,
    kiwi = 'kiwi'
} 

const str: string = 'string!'
const num: number = 123
const bool: boolean = true

const obj: userType = {
    name: 'ju',
    age: 22,
    sex: 'male'
}

const numArr1: number[] = [1,2,3]
const numArr2: Array<number> = [1,2,3]
const numstrArr1: (number | string)[] = [num, str]
const numstrArr2: Array<number | string | Array<string>> = [num, str, [str]]

const anyArr: any[] = [str, num, bool, obj, numArr1, numstrArr2,[obj]]

console.log(anyArr)

const tup: readonly [string, number] = [str, num]
console.log(tup)

console.log(Auth.admin)
console.log(Auth.user)
console.log(Auth.guest)
console.log(cafe.americano)
console.log(cafe.latte)

interface Greet{
    name: string;
    hi(): string;
    bye(a: number):string;
}

const J:Greet = {
    name: 'ju',
    hi() {
        return 'hi'
    },
    bye(number) {
        let g: string= ''
        for(let i =0; i< 5; i++) {
            g+='bye'
        }
        return g
    }
}
console.log(J.hi())
console.log(J.bye(5))

function add(a:string, b:string): string
function add(a:number, b:number): number
function add(a: any, b:any) {
    return a+b
}


function Length<T>(arr: Array<T>): number {
    return arr.length
}

console.log(Length<number>([1,2,3,4,5,6]))
console.log(Length<string>(['123']))

function getValue<T>(val: T): T {
    return val
}
