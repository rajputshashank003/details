import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from './components/RoutesComponent';

const App = () => {
  return (
    <BrowserRouter >
      <div className='h-fit w-screen relative bg-zinc-900'>
        <RoutesComponent/>
        <div className='relative bottom-4 w-full flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App