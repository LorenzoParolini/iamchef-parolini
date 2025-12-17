import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Layout from './layout/Layout';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

// componente principale che fa da wrapper per tutte le pagine
// gestisce layout con header e footer condivisi
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // nascondi header nella pagina di configurazione api
  const showHeader = location.pathname !== '/set-api';

  // torna alla home quando clicchi sul logo
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Layout
      header={showHeader ? <Header onHomeClick={handleHomeClick} /> : undefined}
      main={<Outlet />}
      footer={<Footer />}
    />
  );
}

export default App;