
function CardPizza({ name, price, ingredients, img }) {
    return (
        <div className="card-pizza">
            <img src={img} alt={`Pizza ${name}`} />

            <h3>Pizza {name}</h3>

            <p>Ingredientes:</p>
            <p> {ingredients.join(", ")}</p>

            <h4>Precio: ${price.toLocaleString("es-CL")}</h4>


            <button className="btn btn-outline-dark mt-auto">
                Ver más
            </button>

            <button className="btn btn-dark">
                Añadir
            </button>

        </div>
    )
}

export default CardPizza
