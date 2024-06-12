import './App.css';
import HP_Header from './Components/HP_Header/HP_Header';
import HP_Footer from './Components/HP_Footer/HP_Footer';
import { Outlet } from 'react-router-dom';
// import Othertwo from './Othertwo';

// import OtherTwo from './Othertwo'
// import HP_TopRatedProducts from './Components/HP_TopRated/HP_TopRated';

function App(){
  return(
    <>
      <HP_Header/>
      <Outlet/>
      <HP_Footer/>
    </>
  )
}

export default App;