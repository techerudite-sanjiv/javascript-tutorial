import React, { useState } from 'react';

const ImageSwapper = () => {
    const [images, setImages] = useState([
        { id: 1, src: '', file: null },
        { id: 2, src: '', file: null },
        { id: 3, src: '', file: null },
        { id: 4, src: '', file: null },
        { id: 5, src: '', file: null },
    ]);

    const handleImageChange = (index, event) => {
        const updatedImages = [...images];
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedImages[index] = { ...updatedImages[index], src: reader.result, file };
                setImages(updatedImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSwapWithZero = (index) => {
        if (index !== 0 && index >= 0 && index < images.length) {
            const updatedImages = [...images];
            [updatedImages[0], updatedImages[index]] = [updatedImages[index], updatedImages[0]];
            setImages(updatedImages);
        }
    };

    return (
        <div>
            <h1>Image Swapper</h1>
            <div style={{ display: 'flex' }}>
                {images.map((image, index) => (
                    <div key={image.id} style={{ marginRight: '20px' }}>
                        <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={(event) => handleImageChange(index, event)}
                            />
                            {index !== 0 && <button onClick={() => handleSwapWithZero(index)} disabled={index === 0}>
                                Swap with Image 0
                            </button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSwapper;
