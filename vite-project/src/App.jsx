import './App.css';
import Images from './components/Images';
// import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <>
    <img src={Images.bottleDisposal} alt="" />
    <img src={Images.cleaning1} alt="" />
    <img src={Images.headerLogo} alt="" />
    {/* <h3> Lets go for a <FaBeer />? </h3> */}
    <h1 className="bg-teal-600 p-5 text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
