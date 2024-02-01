import React from 'react'

import useEsewa from "../../../hooks/useEsewa"

const Product = ({ productData }) => {
  const [openEsewaPortal] = useEsewa()

  const proceedToBuy = (product) => {
    const payload = {
        "amount": `${product.price}`,
        "product_delivery_charge": "0",
        "product_service_charge": "0",
        "product_code": product.id,
        "signed_field_names": "total_amount,transaction_uuid,product_code",
        "success_url": "https://localhost:8080/success",
        "failure_url": "https://localhost:8080/failure",
        "tax_amount": "0",
        "total_amount": `${product.price}`,
      }

      openEsewaPortal(payload)
  }


  return (
    <div className="product rounded-md border">
      <img
        src={productData.productImage}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">{productData.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {productData.description}
        </p>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Colors : </span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            8 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            9 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            10 UK
          </span>
        </div>
        <div className="mt-5">
          <span className="text-sm font-semibold">Price: </span>${productData.price}
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={proceedToBuy}
        >
          Buy with esewa
        </button>
      </div>
    </div>
  )
}

export default Product