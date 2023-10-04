import { Link } from "react-router-dom";

export default function Header() {
    const headerS = {
        display: 'flex'
    }
    const ulS = {
        display: 'flex'
    }
    const liS = {
        listStyle: 'none',
        margin: '4px'
    }
    return(
        <header style={headerS}>
            <Link to='/'><h2>ReactRouterDom 실습</h2></Link>
            <nav>
                <ul style={ulS}>
                    <li style={liS}>
                        <Link to="/student/kdt">학생kdt</Link>
                    </li>
                    <li style={liS}>
                        <Link to="/student/codingon">코딩온</Link>
                    </li>
                    <li style={liS}>
                        <Link to="/student/new?name=kdt3rd">searchParams</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}