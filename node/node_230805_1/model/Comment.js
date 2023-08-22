const data = [
    {
        id: 1,
        userId: '김씨',
        date: '남자',
        comment: '체육학과'
    },
    {
        id: 2,
        userId: '이씨',
        date: '여자',
        comment: '실용음악과'
    },
    {
        id: 3,
        userId: '박씨',
        date: '남자',
        comment: '기계공학과'
    },
    {
        id: 4,
        userId: '최씨',
        date: '여자',
        comment: '영문학과'
    },
    {
        id: 5,
        userId: '주씨',
        data: '남자',
        comment: '소프트웨어학부'
    }
]

const commentInfos = () => {
    return data
}
const addU = (name, gender, j, cb) => {
    const id = data.length + 1
    data.push({
        id,
        userId: name,
        date: gender,
        comment: j
    })
    console.log(data)
    cb(data)
}

export { commentInfos, addU }