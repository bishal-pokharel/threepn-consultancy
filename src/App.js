import './App.css';
import Header from '../src/component/header';
import HeaderImg from './component/headImg';
import Footer from './component/footer';
import BodyAboutUS from './component/main_aboutus';
import Offers from './component/offers';
import Maps from './component/maps';
import ContactUs from './component/contactus';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderImg />
      <BodyAboutUS />
      <Offers />
      <Maps />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
