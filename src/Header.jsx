
import imagenHeader from './img/Header.jpg'

function Header() {
  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${imagenHeader})` }}
    >
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  )
}

export default Header
