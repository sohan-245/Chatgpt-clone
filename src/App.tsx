import './App.css'
// import TopSideBar from './components/TopSidebar'
// import SideBar from './components/Sidebar'
// import TopBar from './components/Topbar'
// import Hero from './components/Body'
// import State from './components/State'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
 
   return(
      <BrowserRouter>

      <Routes>
         <Route path="/"element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
   );
}
//  return(
//   <>
//   <State/>
 
//   </>
//  )
   
//    return (
//     <>
//       <div className='flex flex-row'>
//          <div className='border-2 border-gray-200'> <State/></div>
    
//       <div className='flex flex-col h-screen w-screen justify-between'>
//        <TopBar/>
//        <Hero/>
//       </div>
//      </div> 
    
//       </>
//    )
// }




export default App
