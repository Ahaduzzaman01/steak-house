import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Menu/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
