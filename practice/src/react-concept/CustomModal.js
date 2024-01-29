import React, { useEffect } from "react";
import "./customModal.css";

const CustomModal = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.className === "modal1") {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);




  
  if (!isOpen) return null;

  return (
    <div className="modal1">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomModal;
