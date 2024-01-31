import './App.css'
import useEsewa from './useEsewa.js'

const PRODUCTS = [
  {
    "id": "81aedef4-f730-48ba-a969-62d2c18db07e",
    "name": "Lazaro",
    "price": 657
  },
  {
    "id": "b9d2d417-0369-414a-a428-97e67845b71d",
    "name": "Meredeth",
    "price": 325
  },
  {
    "id": "c550fb3d-b6a5-4d28-96a5-e5615ef35b0d",
    "name": "Carroll",
    "price": 238
  },
  {
    "id": "ad6bdbd3-f88c-4908-b344-e2854eb9fbdc",
    "name": "Pate",
    "price": 425
  },
  {
    "id": "27b06de6-e7b0-45aa-b71d-0a543f6d7267",
    "name": "Gherardo",
    "price": 973
  },
  {
    "id": "647235ca-4caa-41a4-b90e-2f5fc7c050f5",
    "name": "Rollie",
    "price": 163
  },
  {
    "id": "eac3253b-cca3-48d7-a056-fd315b774a23",
    "name": "Marianne",
    "price": 461
  },
  {
    "id": "881cdb95-bf58-4c8a-8fdf-2d903a72163f",
    "name": "Edouard",
    "price": 187
  },
  {
    "id": "485d4f98-fbba-416c-b6d1-533f78ad1e00",
    "name": "Benito",
    "price": 911
  },
  {
    "id": "4b42b2f8-b9f5-43c8-a67a-99e4118c6bb4",
    "name": "Roxanna",
    "price": 277
  }
]

function App() {
  const [proceedToBuy] = useEsewa()

  return (
    <>
      <div className="esewa-from" style={{ display: "flex", flexWrap: "wrap" }}>
        {
          PRODUCTS.map(product => {
            return (
              <div className="product" style={{ background: "grey", padding: "15px", margin: "10px" }} key={product.id}>
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
                <button onClick={() => proceedToBuy(product)}>Buy from esewa</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
