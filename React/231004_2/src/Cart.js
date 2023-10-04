import { useContext } from 'react'
import cartContext from './store/cartContext'

export default function Cart() {
    const {shoppingCart, setShoppingCart} = useContext(cartContext)

    const deleteHandler = (product) => {
        if(window.confirm('삭제하겠습니까?')) {
            const matchedProductIndex = shoppingCart.findIndex((item) => {
                return item.id === product.id
            })
            console.log(matchedProductIndex)
            const tempShoppingCart = [...shoppingCart]
            tempShoppingCart.splice(matchedProductIndex,1)
            setShoppingCart(tempShoppingCart)
        }
    }
    return(
        <div>
            {
                shoppingCart.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>개수: {item.count}개</p>
                            <h3>총 가격: {item.price*item.count}</h3>
                            <button onClick={() => {deleteHandler(item)}}>X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}