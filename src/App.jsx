import HomePage from "./HomePage";
import ReelsPage from "./ReelsPage";
import { Routes, Route } from "react-router-dom";


function App(){
  return (
    <div className=" min-h-screen max-w-screen">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/reels" element={<ReelsPage />} />
      </Routes>
    </div>
  )
};
 
export default App;