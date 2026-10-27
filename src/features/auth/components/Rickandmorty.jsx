import React, { useEffect, useState } from 'react'

export const Rickandmorty = () => {
    const [personajes, setPersonajes] = useState([])
    const [cargando, setCargando] = useState(true)
    const [page, setPage] = useState(1) // Estado para controlar la página actual

    useEffect(() => {
        setCargando(true)
        // Consultamos la API pasando el número de página dinámico
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setPersonajes(data.results)
                setCargando(false)
            })
            .catch(error => {
                console.error('Error al consumir la API:', error)
                setCargando(false)
            })
    }, [page]) // El useEffect se vuelve a ejecutar cada vez que 'page' cambia

    // Función para cambiar de página (si llega a la 42, vuelve a la 1)
    const cambiarPersonajes = () => {
        setPage(prevPage => (prevPage < 42 ? prevPage + 1 : 1))
    }

    return (
        <div className="container my-5 text-white text-center">
            <h2 className="mb-3">API - Rick and Morty</h2>

            {/* Botón para cambiar los personajes */}
            <button onClick={cambiarPersonajes} className="btn btn-warning mb-4 fw-bold shadow">
                Cambiar personajes (Página {page})
            </button>

            {cargando ? (
                <p>Cargando nuevos personajes...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {personajes.slice(0, 12).map(personaje => (
                        <div
                            className="card bg-secondary text-white shadow"
                            style={{ width: '250px', flex: '0 0 auto' }}
                            key={personaje.id}
                        >
                            <img
                                src={personaje.image}
                                className="card-img-top"
                                alt={personaje.name}
                                style={{ height: '150px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title fs-6 mb-1">{personaje.name}</h5>
                                <p className="card-text small mb-0">Estado: {personaje.status}</p>
                                <p className="card-text small mb-0">Especie: {personaje.species}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}