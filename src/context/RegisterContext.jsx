import { useContext, useState, createContext } from 'react';

const ModalRegisterContext = createContext();

// eslint-disable-next-line react/prop-types
export const ModalRegisterProvider = ({ children }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRegisterPembeliModal, setShowRegisterPembeliModal] =
    useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleRegisterPembeliClick = () => {
    setShowRegisterModal(false);
    setShowRegisterPembeliModal(true);
  };

  const closeRegisterPembeliModal = () => {
    setShowRegisterPembeliModal(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <ModalRegisterContext.Provider
      value={{
        showLoginModal,
        showRegisterModal,
        showRegisterPembeliModal,
        handleLoginClick,
        handleRegisterClick,
        handleRegisterPembeliClick,
        closeLoginModal,
        closeRegisterModal,
        closeRegisterPembeliModal,
      }}>
      {children}
    </ModalRegisterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalRegister = () => useContext(ModalRegisterContext);
