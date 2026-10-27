import React from 'react'

export const MotoCard = ({ titulo, descripcion, imagen }) => {
    return (
        <div className="card bg-secondary text-white shadow" style={{ width: '400px', flex: '0 0 auto' }}>
            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body p-3">
                <h5 className="card-title fs-6 mb-1">{titulo}</h5>
                <p className="card-text small mb-0">{descripcion}</p>
            </div>
        </div>
    )
}