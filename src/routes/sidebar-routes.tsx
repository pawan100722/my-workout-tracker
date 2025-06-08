import { Route, Routes } from "react-router-dom"

export const SidebarRoutes = ()=>{

  return <>
     <Routes>
      <Route path='/chest' element={<h1>Chest</h1>}/>
      <Route path='/back' element={<h1>Back</h1>}/>
      <Route path='/shoulders' element={<h1>Shoulders</h1>}/>
      <Route path='/bicep' element={<h1>Bicep</h1>}/>
      <Route path='/tricep' element={<h1>Tricep</h1>}/>
      <Route path='/legs' element={<h1>Legs</h1>}/>
     </Routes>
  </>
}