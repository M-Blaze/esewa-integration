import { useEffect, useState } from "react"

import Product from "./components/Product"


export default function Products() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products")
      const { success, products } = await response.json()

      setIsLoading(false)
      if (!success) return 

      setProducts(products)
    }

    fetchProducts()
  }, [])


  return (
    <>
      {
        isLoading ? (<h2>Is Loading</h2>) : 
        (<div className="products mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products.map((product) => (<Product productData={product} key={product.id} />))}
        </div>)
      }
    </>
  )
}
