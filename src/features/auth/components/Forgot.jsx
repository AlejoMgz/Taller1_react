import React from 'react'

export const Forgot = () => {
    return (
        <div className="container my-5 text-white" style={{ maxWidth: '500px' }}>
            <h2 className="mb-4">Recuperar Contraseña</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="emailForgot" className="form-label">Ingresa tu correo</label>
                    <input type="email" className="form-control" id="emailForgot" />
                </div>
                <button type="submit" className="btn btn-warning">Enviar enlace</button>
            </form>
        </div>
    )
}