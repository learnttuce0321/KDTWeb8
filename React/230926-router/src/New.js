import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export default function New() {
    const navigator = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    console.log()

    return(
        <div style={{backgroundColor: "beige", textAlign: 'center', margin: 0, height: '50px'}}>
            <h4 style={{margin: 0}}>학생의 이름은<span style={{color: 'green'}}>new</span>입니다</h4>
            <h4 style={{margin: 0}}>실제 이름 {searchParams.get('name')}</h4>
            <button onClick={() => {
                navigator(-1)
            }}>돌아가기</button>
        </div>
    )
}