// eslint-disable-next-line react/prop-types
const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      {children}
    </div>
  );
};

export default Modal;
