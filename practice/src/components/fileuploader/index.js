import React, { useState } from 'react';
import './file-uploader.css'

const FileSystem = () => {
    const [images, setImages] = useState([
        { id: 1, src: 'https://images.unsplash.com/photo-1578488255683-48cc79c51628?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, src: 'https://images.unsplash.com/photo-1703868673582-becc3bd199d8?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, src: 'https://images.unsplash.com/photo-1659534506362-858f1b7e15dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, src: 'https://images.unsplash.com/photo-1672563082571-fdda94dc1a42?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, src: 'https://images.unsplash.com/photo-1607859342232-b3d5de765bdf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ]);
    const handleSwap = (index) => {
        if (index !== 0 && index >= 0 && index < images.length) {
            const updatedImages = [...images];
            [updatedImages[0], updatedImages[index]] = [updatedImages[index], updatedImages[0]];
            setImages(updatedImages);
        }
    };

    return (
        <div className='image-container'>
            <div className='row'>
                {images.map((image, index) => (
                    <>
                        {index === 0 ? <div className='col-md-12 mb-4' key={image.id} >
                            <span className=''>Cover Photo</span>
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                style={{ width: '580px', height: '200px', objectFit: 'cover' }}
                            />

                            <div>
                                {index != 0 && <button onClick={() => handleSwap(index)} disabled={index === 0}>
                                    Make Cover Photo
                                </button>}
                            </div>
                        </div> : <div className='col-md-6 mb-4' key={image.id} >
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                style={{ width: '250px', height: '150px', objectFit: 'cover' }}
                            />
                            <div>
                                {index != 0 && <button onClick={() => handleSwap(index)} disabled={index === 0}>
                                    Make Cover Photo
                                </button>}
                            </div>
                        </div>}
                    </>
                ))}
            </div>
        </div>

    );
};

export default FileSystem;
