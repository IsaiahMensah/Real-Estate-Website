import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import './App.css';
import Featured from'./component/featured/Featured' 
import Best from './component/best/Best'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Best/>
     <Featured/>
     <Footer/>
    </div>
  );
}

export default App;
