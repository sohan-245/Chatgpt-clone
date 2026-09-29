import './App.css'
// import TopSideBar from './components/TopSidebar'
// import SideBar from './components/Sidebar'
// import TopBar from './components/Topbar'
// import Hero from './components/Body'
// import State from './components/State'
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import CreateUserPage from './pages/CreateUserPage';
import Dashboard from './pages/DashboardPage';

function App() {
 
   return(
      <>
      <BrowserRouter>

      <Routes>
         <Route path="/"element={<Homepage/>}/>
         <Route path="/login"element={<Loginpage/>}/>
         <Route path="/create-user"element={<CreateUserPage/>}/>
         <Route path="/dashboard"element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      </>
   )
};

export default App;

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




