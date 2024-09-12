import { ModalRegisterProvider } from './context/RegisterContext';
import Router from './router/Router';

function App() {
  return (
    <ModalRegisterProvider>
      <Router />
    </ModalRegisterProvider>
  );
}

export default App;
