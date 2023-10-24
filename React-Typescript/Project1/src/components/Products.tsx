import React from 'react'
import { IProduct } from '../App'

interface IProductsProps{
    productList: IProduct[],
    handleAddToCart(id:number): void
}

const Products = ({productList,handleAddToCart}:IProductsProps) => {
    
  return (
    <div style={{padding:"4vw 7vw"}}>
      <div style={{fontSize:"3vw"}}>PRODUCTS</div>
      <hr style={{marginBottom:'2vw'}}/>
      <div style={{border: '2px solid black', padding:'1vw 8vw', borderRadius:"5px"}}>
        {
        productList.map((product)=>{
            return(
                <div className='product_container' style={{display:"flex", height:'8vw', alignItems:'center' ,border:'1px solid black', justifyContent:'space-around' }}>
                    <h3>{product.name}</h3>
                    <button type="button" onClick={()=>{handleAddToCart(product.id)}}>Add to cart</button>
                </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default Products
