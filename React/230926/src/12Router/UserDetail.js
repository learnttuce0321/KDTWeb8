import { Link, Outlet, useParams } from "react-router-dom";
import { users } from './User.js'
export default function UserDetail() {
    const params = useParams()
    const user = users[Number(params.id) - 1]
    
    return (
        <div>
            <h1>이름: {user.name}</h1>
            <Link to="comment">댓글</Link>
            <Outlet context={user.comment}/>
        </div>
    );
}
