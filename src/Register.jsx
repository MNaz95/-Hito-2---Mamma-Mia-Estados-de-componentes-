
import { useState } from 'react'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mensaje, setMensaje] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            setMensaje('Todos los campos son obligatorios')
            return
        }

        if (password.length < 6) {
            setMensaje('La contraseña debe tener al menos 6 caracteres')
            return
        }

        if (password !== confirmPassword) {
            setMensaje('Las contraseñas no coinciden')
            return
        }

        setMensaje('Registro exitoso')
    }



    return (
        <div className="container my-4">
            <h2>Registro de usuario</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Ingresá tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirmar contraseña
                    </label>


                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="Repetí tu contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                </div>


                <button type="submit" className="btn btn-dark">
                    Registrarse
                </button>


                {mensaje && (
                    <p
                        className={`mt-3 ${mensaje === 'Registro exitoso'
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

export default Register
