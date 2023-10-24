import React,{useEffect, useState, lazy, Suspense} from "react";
// import "./App.css";
const YoutubeForm = lazy(()=>import('./Components/YoutubeForm'))
const YUPIntegration = lazy(()=>import('./Components/YUPIntegration'))
const MUIIntegration = lazy(() => import('./Components/MUIIntegration'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <YoutubeForm/> */}
      {/* <YUPIntegration/> */}
      <MUIIntegration/>
    </Suspense>
  );
}

export default App;
