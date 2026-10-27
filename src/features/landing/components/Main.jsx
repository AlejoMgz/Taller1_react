import React from 'react'
import { MotoCard } from './Motocard'

export const Main = () => {
    return (
        <main className="container my-5 text-white">
            {/* Sección Superior: Banner PPM responsivo */}
            <div className="row align-items-center mb-5 p-4 bg-secondary bg-opacity-25 border border-secondary rounded shadow-sm">
                <div className="col-12 col-md-5 mb-3 mb-md-0 text-center">
                    <img
                        src="/pasion.png"
                        alt="Pasión por las Motos"
                        className="img-fluid rounded shadow"
                        width="600"
                        height="240"
                        style={{ height: '240px', width: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-12 col-md-7">
                    <h1 className="fw-bold text-warning mb-3 fs-2 fs-md-1">Pasión Por las Motos</h1>
                    <p className="lead fs-6 fs-md-5">
                        El motociclismo no es solo un medio de transporte; es un estilo de vida, libertad sobre dos ruedas y una comunidad sin fronteras.
                    </p>
                    <p className="text-muted small mb-0">
                        Explora las máquinas más emblemáticas, mantente al día con el mundo motor y vive la intensidad de rodar con seguridad y potencia.
                    </p>
                </div>
            </div>

            {/* Sección Inferior: Modelos destacados responsivos */}
            <h3 className="text-center mb-4">Modelos Destacados</h3>
            <div className="row justify-content-center">
                <MotoCard
                    titulo="Deportiva"
                    descripcion="Velocidad y aerodinámica pura para circuito."
                    imagen="./s1000.jpg"
                />
                <MotoCard
                    titulo="Naked Urbana"
                    descripcion="Potencia enérgica para dominar las calles."
                    imagen="./images.jpg"
                />
                <MotoCard
                    titulo="Trail Aventura"
                    descripcion="Preparadas para cruzar cualquier terreno."
                    imagen="./nx190.jpg"
                />
            </div>
        </main>
    )
}