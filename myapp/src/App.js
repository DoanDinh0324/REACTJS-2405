import './App.css';
import Footer from './components/Footer/Footer';
import ProductMain from './components/ProductMain/Productmain';
import ProductTop from './components/ProductTop/Productop';

function App() {
  return (
    <div className="App">
      <ProductTop/>
      <ProductMain/>
      <Footer/>
    </div>
  );
}

export default App;
