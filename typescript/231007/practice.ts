interface game {
    name: string,
    type: string
}
const olimplic_newgame : readonly [game, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성경주'
    },
    true,
]
// console.log(olimplic_newgame)

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: (string)[];
    platform: (string)[];
}
const heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: ['액션', '캐쥬얼'],
    platform: ['모바일', 'xbox']
}
const heroGame_B: Game = {
    title: 'Marvel 퓨처파이트',
    price: 65000,
    category: ['액션', '스릴러'],
    platform: ['모바일', '데스크톱']
}
// console.log(heroGame_A)
// console.log(heroGame_B)

const foo1 = (a:number, b: number, c = 5): void => {
    console.log(a+ b)
}
// foo1(1, 2)

const foo2 = (...nums: number[]) : number => {
    const total = nums.reduce((acc, curr) => acc = acc + curr)
    return total
}
const arr1 = [1,2,3,4,10]
// console.log(foo2(...arr1))


interface arrE {
    <T>(a: Array<T>, b: number) : (T|boolean)
}
const arrElement: arrE = (a, b) => {
    if(a.length < b) {
        return false
    }
    return(a[b-1])
}
console.log(arrElement<number>([1,2,3,4,5,6], 9))
console.log(arrElement<string>(['1','2','3','4','5','6'], 1))
