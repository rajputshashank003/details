import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from './components/RoutesComponent';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <BrowserRouter >
      <div className='h-fit w-screen relative bg-black'>
        <RoutesComponent/>
        <div className='relative bottom-4 w-full flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App