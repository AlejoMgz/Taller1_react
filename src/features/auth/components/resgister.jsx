import React from 'react'

export const Resgister = () => {
    return (
        <div className="container my-5 text-white" style={{ maxWidth: '500px' }}>
            <h2 className="mb-4">Registro de Usuario</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailReg" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="emailReg" />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordReg" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="passwordReg" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}