import { AuthProvider } from './context/AuthContext';
import { ModalRegisterProvider } from './context/RegisterContext';
import Router from './router/Router';

function App() {
  return (
    <AuthProvider>
      <ModalRegisterProvider>
        <Router />
      </ModalRegisterProvider>
    </AuthProvider>
  );
}

export default App;
