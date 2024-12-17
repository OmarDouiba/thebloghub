import './App.css';
import { Navbar, Footer } from './components';
import { HomePage } from './pages';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
