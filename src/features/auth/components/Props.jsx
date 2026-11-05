import React from 'react'
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    const imageSize = size > 70 ? 'b' : 's';

    return (
        <img
            className="rounded-circle shadow"
            src={getImageUrl(person, imageSize)}
            alt={person.name}
            width={size}
            height={size}
            style={{ objectFit: 'cover' }}
        />
    );
}

export default function Profile() {
    return (
        <div className="container my-5 text-white text-center">
            <h2 className="mb-4">Ejemplo de Props y Avatares</h2>

            {/* Usamos flex-row para alinearlos horizontalmente */}
            <div className="d-flex flex-row justify-content-center align-items-center gap-4">
                <div>
                    <Avatar
                        size={100}
                        person={{
                            name: 'Katsuko Saruhashi',
                            imageId: 'YfeOqp2'
                        }}
                    />
                </div>
                <div>
                    <Avatar
                        size={80}
                        person={{
                            name: 'Aklilu Lemma',
                            imageId: 'OKS67lh'
                        }}
                    />
                </div>
                <div>
                    <Avatar
                        size={50}
                        person={{
                            name: 'Lin Lanying',
                            imageId: '1bX5QH6'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}