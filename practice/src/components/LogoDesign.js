import React, { useState } from 'react';

const ProfilePictureUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                <div
                    style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: 'auto',
                        marginBottom: '20px',
                        position: 'relative',
                    }}
                >
                    {selectedFile ? (
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: '#FDEDEC',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: '#FF00FB',

                            }}
                        >
                            <p className='text-center' style={{fontSize:30}}><i class="fa-solid fa-file"></i></p>
                            <span style={{
                                fontSize: 12,
                                fontWeight: 500
                            }}>   Upload Your Logo</span>
                        </div>
                    )}
                </div>
            </label>

            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ProfilePictureUploader;
