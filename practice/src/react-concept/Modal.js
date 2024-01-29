import React, { useState } from 'react';
import CustomModal from './CustomModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <CustomModal isOpen={isModalOpen} onClose={closeModal} message="Hello, this is a custom modal!" />
    </div>
  );
}

export default App;
