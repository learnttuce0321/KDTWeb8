import { useDispatch } from 'react-redux'
import { addCart } from "../store/store"

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
  },
  {
    id: 4,
    name: 'd',
    price: 30000,
    info: 'DDDDDDDDDDDDDDDDD'
  },
]

const productContainerStyle = {
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    padding: '5rem',
    justfyContent: 'center'
}
const productStyle = {
    flex: '1 300px',
    boxSizing: 'border-box',
    maxWidth: '25%',
    borderRadius: '2rem',
    boxShadow: '1px 1px 9px 1px lightgray',
    margin: '0.5rem',
    padding: '1rem'
}

export default function Product() {
    const dispatch = useDispatch()

    const addHandler = (product) => {

        // const matchedProductIndex = shoppingCart.findIndex((item) => {
        //     return item.id === product.id
        // })

        // if(matchedProductIndex !== -1) {
        //     const tempShoppingCart = [...shoppingCart]
        //     tempShoppingCart[matchedProductIndex].count += 1
        //     setShoppingCart(tempShoppingCart)
        //     return
        // }

        // setShoppingCart(prev => [...prev, {...product, count: 1}])
        dispatch(addCart({product: product}))
    }
    
    return (
        <div style={productContainerStyle}>
            {
                product.map((item) => {
                    return (
                        <div key={item.id} style={productStyle}>
                            <h1 style={{margin: 0}}>{item.name}</h1>
                            <p>{item.info.length < 8 ? item.info : item.info.slice(8) + ' ...'}</p>
                            <h3>{item.price}</h3>
                            <button onClick={() => {addHandler(item)}}>장바구니 담기</button>
                        </div>
                    )
                })
            }
        </div>
    )
}