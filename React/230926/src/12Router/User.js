import { Link, useSearchParams } from 'react-router-dom';

export const users = [
    {
        id: 1,
        name: '홍길동',
        comment: [
            'ㅎㅇ', 'ㅎㅇㅎㅇ', 'ㅎㅇㅎㅇㅎㅇ'
        ],
    },
    {
        id: 2,
        name: '이몽룡',
        comment: [
            'ㅂㅇ', 'ㅂㅇㅂㅇ', 'ㅂㅇㅂㅇㅂㅇ'
        ],
    },
    {
        id: 3,
        name: '임꺽정',
        comment: [
          '?'  , '???', '?????'
        ],
    },
];

export default function User() {

    // searchParams : 쿼리스트링 값 가져오기
    // setSearchParams : 쿼리스트링 지정하기
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.get('name'))
    // setTimeout(() => {
    //     setSearchParams({mode: 'dark'})
    // }, 3000)
    return (
        <div>
            <ul>
                {users.map((value) => {
                    return (
                        <li key={value.id}>
                            <Link to={`/user/${value.id}`}>{value.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
