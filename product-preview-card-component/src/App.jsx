import { productData } from './assets/js/data.js'
import './scss/styles.css'
import './scss/components/Card.css'

function App() {
  const {
    imgDesktop,
    imgDesktopAlt,
    category,
    name,
    desc,
    price,
    was
  } = productData

  return (
    <main className="card container">
      <img className="product-img" src={imgDesktop} alt={imgDesktopAlt}/>
      <div className="product-info">
        <span className='categ categ-txt'>{category}</span>
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="flex price">
          <h3>${price}</h3>
          <span className="was-price-txt"><strike>${was}</strike></span>
        </div>
        <button className="btn btn-txt"><img className="cart" src="../assets/images/icon-cart.svg" alt="white cart icon"/>Add to Cart</button>
      </div>
    </main>
  )
}

export default App
