import { useContext } from "react"
import cartContext from "./store/cartContext"

const product = [
  {
    id: 1,
    name: 'a',
    price: 10000,
    info: 'AAAAAAAAAAAAAAAAA'
  },
  {
    id: 2,
    name: 'b',
    price: 20000,
    info: 'BBBBBBBBBBBBBBBBB'
  },
  {
    id: 3,
    name: 'c',
    price: 30000,
    info: 'CCCCCCCCCCCCCCCCC'
  }
]

export default function Product() {
    const {shoppingCart, setShoppingCart} = useContext(cartContext)

    const addHandler = (product) => {

        const matchedProductIndex = shoppingCart.findIndex((item) => {
            return item.id === product.id
        })

        if(matchedProductIndex !== -1) {
            const tempShoppingCart = [...shoppingCart]
            tempShoppingCart[matchedProductIndex].count += 1
            setShoppingCart(tempShoppingCart)
            return
        }

        setShoppingCart(prev => [...prev, {...product, count: 1}])
    }
    return (
        <div>
            {
                product.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.info}</p>
                            <h3>{item.price}</h3>
                            <button onClick={() => {addHandler(item)}}>장바구니 담기</button>
                        </div>
                    )
                })
            }
        </div>
    )
}