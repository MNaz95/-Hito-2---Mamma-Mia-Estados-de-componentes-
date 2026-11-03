
function Navbar() {
  const token = false
  const total = 25000

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">

        <span className="navbar-brand">
          Pizzería Mamma Mía
        </span>

        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-light">
            Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light">
                Profile
              </button>
              <button className="btn btn-outline-light">
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">
                Login
              </button>
              <button className="btn btn-outline-light">
                Register
              </button>
            </>
          )}


          <button className="btn btn-outline-light">
            Total: ${total.toLocaleString("es-AR")}
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
