import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
    const cartItem = useSelector(state => state.cart)
    const totalValue = cartItem.reduce((acc, curr) => acc + curr.price * curr.count, 0)

    const productContainerStyle = {
        width: '100vw',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        padding: '5rem',
        justfyContent: 'center'
    }
    
    return(
        <div>
            <h1>총 {totalValue}원</h1>
            <div style={productContainerStyle}>
                {
                    cartItem.map((item) => {
                        return (
                            <CartItem item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}