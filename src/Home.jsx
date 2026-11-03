
import Header from './Header'
import CardPizza from './CardPizza'

function Home() {
  return (
    <>
      <Header />

      <main className="container my-4">
        <h2>Nuestras pizzas</h2>
        <p>Conocé nuestras variedades.</p>

        <div className="row g-4">

          <div className="col-md-4">

            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600"
            />
          </div>

      </div>
    </main>
    </>
  )
}

      export default Home
