

import './App.css'
import TopSideBar from './components/TopSidebar'
import SideBar from './components/Sidebar'
import TopBar from './components/Topbar'
import Hero from './components/Body'



function App() {
 

  return (
    <>
    <div className='flex flex-row'>
          <div className='flex flex-col w-75'>
    <TopSideBar/>
    <SideBar/>
    </div>
      <div className='flex flex-col border-blue-500 border-2 h-screen w-screen justify-between'>
      <TopBar/>
      <Hero/>
     </div>
    </div>
    
    </>
  )
}

export default App
