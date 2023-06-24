import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MyProject from './components/MyProject';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
<>
    <Navbar />

    <Header />
    <MyProject/>
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
