import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const cartItem = useSelector(state => state.cart)

    return (
        <header>
            <Link to=''>상품보기</Link>
            <Link to='cart'>카트</Link>
            <span>{cartItem.length}</span>
        </header>
    )
}