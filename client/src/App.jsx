import './App.css'
// import crypto from 'crypto'

const PRODUCTS = [{
  "id": 1,
  "name": "Island Oasis - Peach Daiquiri",
  "price": 4391
}, {
  "id": 2,
  "name": "Beans - Kidney White",
  "price": 962
}, {
  "id": 3,
  "name": "Sprouts Dikon",
  "price": 3311
}, {
  "id": 4,
  "name": "Chicken - Tenderloin",
  "price": 8672
}, {
  "id": 5,
  "name": "Pie Filling - Apple",
  "price": 127
}, {
  "id": 6,
  "name": "Pecan Raisin - Tarts",
  "price": 9597
}, {
  "id": 7,
  "name": "Pastry - Key Limepoppy Seed Tea",
  "price": 1009
}, {
  "id": 8,
  "name": "Wine - Vovray Sec Domaine Huet",
  "price": 9346
}, {
  "id": 9,
  "name": "Truffle Cups - Red",
  "price": 4872
}, {
  "id": 10,
  "name": "Sugar - Palm",
  "price": 2526
}]

function App() {
  const createHash = (message) => {
    const hash = crypto.createHmac("SHA256", "8gBm/:&EnhH.1/q")
    
    hash.update(message)
    const hashInBase64 = hash.digest("base64")

    return hashInBase64
  }

  const buyItem = product => {

    console.log(product)
  }

  return (
    <>
      <div className="esewa-from">
        {
          PRODUCTS.map(product => {
            return (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <button onClick={() => buyItem(product)}>Buy from esewa</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
