import './App.css';
import Title from './components/Title';
import Service from './pages/Service';
import Appliance from './pages/services/Appliance';
import Baseboard from './pages/services/Baseboard';
import Bathroom from './pages/services/Bathroom';
import General from './pages/services/General';
import Kitchen from './pages/services/Kitchen';
import Window from './pages/services/Window';


function App() {
  return (
    <>
        <Title/>
        {/* <Service/> */}
        {/* <General/> */}
        {/* <Kitchen/> */}
        {/* <Bathroom/> */}
        {/* <Appliance/> */}
        {/* <Baseboard/ */}
        <Window/>
    </>
  )
}

export default App
