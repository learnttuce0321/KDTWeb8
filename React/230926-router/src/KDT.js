import {useNavigate} from 'react-router-dom'

export default function KDT() {
    const navigator = useNavigate()
    return(
        <div style={{backgroundColor: "beige", textAlign: 'center', margin: 0, height: '50px'}}>
            <h4 style={{margin: 0}}>학생의 이름은<span style={{color: 'green'}}>kdt</span>입니다</h4>
            <button onClick={() => {
                navigator(-1)
            }}>돌아가기</button>
        </div>
    )
}