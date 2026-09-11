

import './App.css'
import TopSideBar from './components/TopSidebar'
import SideBar from './components/Sidebar'
import TopBar from './components/Topbar'
import Hero from './components/Body'



function App() {
 

  return (
    <>
    <div className='flex flex-row'>
          <div className='flex flex-col w-80 border-2 border-gray-200'>
    <TopSideBar/>
    <SideBar/>
    </div>
      <div className='flex flex-col h-screen w-screen justify-between'>
      <TopBar/>
      <Hero/>
     </div>
    </div>
    
    </>
  )
}

export default App
