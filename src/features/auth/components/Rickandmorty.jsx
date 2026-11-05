import React, { useEffect, useState } from 'react'

export const Rickandmorty = () => {
    const [personajes, setPersonajes] = useState([])
    const [cargando, setCargando] = useState(true)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setCargando(true)
        // Consultamos la API combinando el número de página y nombre
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se encontraron resultados')
                }
                return res.json()
            })
            .then(data => {
                setPersonajes(data.results)
                setTotalPages(data.info.pages) // Guardamos el total de páginas que tiene la API
                setCargando(false)
            })
            .catch(error => {
                console.error('Error al consumir la API:', error)
                setPersonajes([])
                setTotalPages(1)
                setCargando(false)
            })
    }, [page, search])

    // Funciones para manejar la paginación
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1)
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1)
        }
    }

    // Cada vez que el usuario escriba en el buscador, volvemos a la página 1
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
        setPage(1)
    }

    return (
        <div className="container my-5 text-white text-center">
            <h2 className="mb-4">Consumo API - Rick and Morty</h2>

            {/* Input de Búsqueda */}
            <div className="mb-4 d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control w-50 bg-secondary text-white border-0 shadow"
                    placeholder="Buscar personaje por nombre..."
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>

            {cargando ? (
                <p>Cargando personajes...</p>
            ) : (
                <>
                    {/* Grilla de personajes */}
                    {personajes.length > 0 ? (
                        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                            {personajes.map(personaje => (
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
                    ) : (
                        <p className="text-warning mb-5">No se encontraron personajes con ese nombre.</p>
                    )}

                    {/* Controles de Paginación en la parte inferior */}
                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center align-items-center gap-3 my-4">
                            <button
                                className="btn btn-outline-light"
                                onClick={handlePrevPage}
                                disabled={page === 1}
                            >
                                Anterior
                            </button>

                            <span className="fw-bold">
                                Página {page} de {totalPages}
                            </span>

                            <button
                                className="btn btn-outline-light"
                                onClick={handleNextPage}
                                disabled={page === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}