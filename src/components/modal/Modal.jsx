// eslint-disable-next-line react/prop-types
const Modal = ({ isVisible, onClose, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
      {children}
    </div>
  );
};

export default Modal;
