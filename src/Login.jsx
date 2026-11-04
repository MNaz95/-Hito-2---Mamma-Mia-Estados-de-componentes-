import { useState } from 'react'
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mensaje, setMensaje] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setMensaje('Todos los campos son obligatorios')
            return
        }

        if (password.length < 6) {
            setMensaje('La contraseña debe tener al menos 6 caracteres')
            return
        }

        setMensaje('Inicio de sesión exitoso')
    }


    return (
        <div className="container my-4">
            <h2>Inicio de sesión</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                        Correo electrónico
                    </label>


                    <input
                        type="email"
                        id="loginEmail"
                        className="form-control"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                        Contraseña
                    </label>


                    <input
                        type="password"
                        id="loginPassword"
                        className="form-control"
                        placeholder="Ingresá tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button type="submit" className="btn btn-dark">
                    Iniciar sesión
                </button>

                {mensaje && (
                    <p
                        className={`mt-3 ${mensaje === 'Inicio de sesión exitoso'
                                ? 'text-success'
                                : 'text-danger'
                            }`}
                    >
                        {mensaje}
                    </p>
                )}

            </form>
        </div>
    )
}

export default Login
