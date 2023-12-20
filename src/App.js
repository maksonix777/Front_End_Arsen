 import './App.css';
import RentWrapper from './components/Rent/RentWrapper';
import WorkWrapper from './components/Work/WorkWrapper';
import HeaderWrapper from './components/header/HeaderWrapper';
import ServiceWrapper from './components/service/ServiceWrapper';
import SloganWrapper from './components/slogan/SloganWrapper';


function App() {
  return (
<div>
  <HeaderWrapper/>
  <RentWrapper/>
  <SloganWrapper/>
  <WorkWrapper/>
  <ServiceWrapper/>
  </div>
  );
}

export default App;
