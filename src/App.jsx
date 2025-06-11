import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProposalsPage from './pages/ProposalsPage';
import FloatingActionButton from './components/ui/FloatingActionButton';
import PWAInstallPrompt from './components/ui/PWAInstallPrompt';
import RainyBackground from './components/layout/RainyBackground'; // <-- IMPORTADO

function AppLayout() {
  return (
    // Se cambia el fondo a transparente para que el fondo 3D sea visible
    <div className="flex flex-col min-h-screen bg-transparent"> 
      <RainyBackground /> {/* <-- AÑADIDO EL COMPONENTE DE FONDO 3D */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButton />
      <PWAInstallPrompt />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre-ximena" element={<AboutPage />} />
          <Route path="propuestas" element={<ProposalsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;