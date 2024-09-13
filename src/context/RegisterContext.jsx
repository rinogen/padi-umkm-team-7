import { useContext, useState, createContext } from 'react';

const ModalContext = createContext();

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

  const handleRegisterFromLogin = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleLoginFromRegister = () => {
    setShowRegisterModal(false);
    setShowRegisterPembeliModal(false);
    setShowLoginModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        showLoginModal,
        showRegisterModal,
        showRegisterPembeliModal,
        handleLoginClick,
        handleRegisterClick,
        handleRegisterPembeliClick,
        handleRegisterFromLogin,
        handleLoginFromRegister,
        closeLoginModal,
        closeRegisterModal,
        closeRegisterPembeliModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
