import { useState } from 'react'
import './App.css'
import Products from './components/Products'

export interface IProduct{
  name: string,
  id: number,
  price: number
}

type TCart = number






function App() {

  const [products,setProducts] = useState<IProduct[]>([
    {
      name: 'MacBook Air M2 (15"")',
      id: 111,
      price: 130000
    },
    {
      name: 'MacBook Air M2 (13"")',
      id: 222,
      price: 950000
    },
    {
      name: 'MacBook PRO M2 (15"")',
      id: 333,
      price: 230000
    }
  ])

  

  const [cart,setCart] = useState<TCart>([])
  console.log("Cart Details: ", cart)
  const handleAddToCart = (id:number)=>{
    console.log("clicked: ",id)
    const updatedCart = [...cart, id]
    setCart(updatedCart)
  }
  return (
    <div>
      <h4 style={{fontSize:'4vw'}}>ECommerce Application</h4>
      <Products productList={products} handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App
