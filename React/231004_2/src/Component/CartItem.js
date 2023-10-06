import { memo, useContext } from "react"
import cartContext from "../store/cartContext"
export default memo(function CartItem({item}) {

    const {shoppingCart, setShoppingCart} = useContext(cartContext)

    const deleteHandler = (product) => {
        if(window.confirm('삭제하겠습니까?')) {
            setShoppingCart(shoppingCart.filter((item) => item.id !== product.id))
        }
    }

    const productStyle = {
        flex: '1 300px',
        boxSizing: 'border-box',
        maxWidth: '400px',
        borderRadius: '2rem',
        boxShadow: '1px 1px 9px 1px lightgray',
        margin: '0.5rem',
        padding: '1rem'
    }
    
    return(
        <div style={productStyle}>
            <h1 style={{margin: 0}}>{item.name}</h1>
            <p>개수: {item.count}개</p>
            <h3>총 가격: {item.price*item.count}</h3>
            <button onClick={() => {deleteHandler(item)}}>X</button>
        </div>
    )
})