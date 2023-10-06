import { Link } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../store/cartContext'

export default function Header() {
    const {shoppingCart} = useContext(cartContext)
    return (
        <header>
            <Link to=''>상품보기</Link>
            <Link to='cart'>카트</Link>
            <span>{shoppingCart.length}</span>
        </header>
    )
}